import { Telegraf } from 'telegraf';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

import { message } from 'telegraf/filters';
import userModel from './src/models/user.js';
import eventModel from './src/models/Event.js';
import connectDb from './src/config/db.js';

const bot = new Telegraf(process.env.BOT_TOKEN);

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

try {
    connectDb();
    console.log("Database connected successfully");
} catch (err) {
    console.error(err);
    process.kill(process.pid, 'SIGTERM');
}

bot.start(async (ctx) => {
    const from = ctx.update.message.from;

    console.log('from', from);

    try {
        await userModel.findOneAndUpdate(
            { tgId: from.id },
            {
                $setOnInsert: {
                    firstName: from.first_name,
                    lastName: from.last_name,
                    isBot: from.is_bot,
                    username: from.username,
                },
            },
            { upsert: true, new: true }
        );

        await ctx.reply(`Hey! ${from.first_name}, 👋 Welcome to the Day Update Bot. Keep updating me with your work throughout the day!`);
    } catch (err) {
        console.error(err);
        await ctx.reply('⚠️ Facing difficulties registering your information. Please try again later.');
    }
});

bot.command('generate', async (ctx) => {
    const from = ctx.update.message.from;
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    try {
        const events = await eventModel.find({
            tgId: from.id,
            createdAt: { $gte: startOfDay, $lte: endOfDay },
        });

        if (events.length === 0) {
            await ctx.reply('No events for today! 🗓️ Start adding your thoughts to create a post.');
            return;
        }

        // Initialize the Gemini model
        const model = genAI.getGenerativeModel({
            model: process.env.GEMINI_MODEL || "gemini-pro",
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            },
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
                }
            ],
        });

       const prompt = `Act as a creative copywriter. 
Write three short social media posts for LinkedIn, Instagram, and YouTube. 
Each post must be written in a conversational, impactful, and encouraging tone. 
Keep each post within 50 words only and combine them together in a single paragraph (no line breaks). 
Highlight the following events creatively,neglect the word which doesnot make any sense in user given input: ${events.map(e => e.text).join(', ')}. 
At the end of the paragraph, add one motivational line (choose randomly from the list below, do not repeat them all). 
List of motivational lines:
1. Every small step today is building your stronger tomorrow.
2. Consistency beats intensity — keep showing up, that’s real progress.
3. Your future self will thank you for the effort you put in now.
4. Discipline today opens the doors to freedom tomorrow.
5. Even on tough days, the fact that you tried is a win.
6. Time will pass anyway — make it count with productive work.
7. You’re not just working, you’re shaping the best version of yourself.`; 

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = response.text();

        // For Gemini, we don't have token usage details in the free version
        // But we can count tokens approximately if needed
        const promptTokens = prompt.split(/\s+/).length;
        const completionTokens = generatedText.split(/\s+/).length;
        
        await userModel.findOneAndUpdate(
            { tgId: from.id },
            {
                $inc: {
                    promptTokens: promptTokens,
                    completionTokens: completionTokens,
                },
            }
        );

        await ctx.reply(generatedText);
    } catch (err) {
        console.error("Error generating content:", err);
        await ctx.reply('⚠️ Unable to generate content at the moment. Please try again later.');
    }
});

bot.on(message('text'), async (ctx) => {
    const from = ctx.update.message.from;
    const text = ctx.update.message.text;

    if (!text.trim()) {
        await ctx.reply('⚠️ Please enter some valid content.');
        return;
    }

    try {
        await eventModel.create({ text, tgId: from.id });
        await ctx.reply('✅ Noted! Keep texting me about your thoughts throughout the day. To generate the post, enter /generate.');
    } catch (err) {
        console.error(err);
        await ctx.reply('⚠️ Facing difficulties managing your events. Please try again.');
    }
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));