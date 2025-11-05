🚀 Motivational Progress Tracker Telegram Bot

AI-powered Telegram bot that logs your daily progress (LinkedIn, Twitter, projects, tasks), stores entries in MongoDB, and uses Gemini to generate motivational summaries on demand.


🧠 Overview

The Motivational Progress Tracker Bot is an AI-driven Telegram bot that helps users stay consistent and self-aware about their daily growth.

Through simple chat commands, users can log their daily achievements, track progress automatically, and receive AI-generated motivational feedback powered by Google’s Gemini model.

This project blends automation, AI, and productivity tracking — making it both technically impressive and personally impactful.

✨ Key Features

✅ /start Command:
Initializes the bot and greets the user with a warm welcome message.

✅ Daily Logging:
Users can continuously update their progress throughout the day (e.g., “Updated LinkedIn headline”, “Posted on Twitter”, etc.).
All entries are stored securely in MongoDB.

✅ /generate Command:
At the end of the day, the bot uses Gemini API to summarize your daily updates, generate a motivational message, and encourage consistent effort.

✅ MongoDB Integration:
Stores all daily activities per user in a structured format.

✅ Gemini AI Integration:
Uses Google’s Generative AI API to produce meaningful summaries and motivational texts.

✅ Persistent Data:
Each user’s data is tracked individually, so their growth journey is preserved over time.

✅ Error Handling & Auto-Restart:
Handles missing inputs, database issues, or API errors gracefully with user-friendly prompts.

🧩 Tech Stack
Component	Technology
Backend	Node.js (ES Modules)
Framework	Express.js
Database	MongoDB (via Mongoose)
Bot Framework	Telegraf
AI Integration	Google Gemini API (@google/generative-ai)
Environment Variables	dotenv
Dev Tool	Nodemon
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/motivational-telegram-bot.git
cd motivational-telegram-bot

2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Create a file named .env in the root directory and add the following:

BOT_TOKEN=your_telegram_bot_token
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

4️⃣ Run the Bot
npm run dev

5️⃣ Start Chatting

Open Telegram → Search your bot (created via @BotFather
) →
Send /start and begin logging your progress!

📊 Example Usage

User: /start
Bot: “Hey Bidisha! I’m ready to track your achievements today. Let’s make progress!”

User: “Updated my LinkedIn bio and connected with two recruiters.”
User: “Posted about my recent project on Twitter.”

User: /generate
Bot:
“Today, you made meaningful professional updates on LinkedIn and shared your growth on Twitter.
You’re building consistency — keep pushing forward! 💪🔥”

💡 Advanced Ideas for FAANG-Level Enhancement

To make your bot FAANG-level impressive, you can enhance it with:

🌐 1. Multi-User Support Dashboard

Build a React.js dashboard connected via a REST API to visualize daily stats.

Show charts of daily progress using Chart.js.

🤖 2. AI Insights

Use Gemini to analyze weekly trends (e.g., “You’ve been most productive on Thursdays.”)

Add a custom prompt chain for personalized motivation.

☁️ 3. Cloud Hosting

Deploy backend on Render, Railway, or Vercel.

Use MongoDB Atlas for database hosting.

Make it publicly accessible, so others can use your bot via your Telegram username.

🧑‍💻 4. Authentication & Sharing

Allow others to register via Telegram commands (/register, /login).

Users can export their daily summaries as PDF or auto-post to LinkedIn.

🧬 5. Memory Feature

Use MongoDB or Redis to give the bot a memory, so it recalls past achievements.

☁️ Deployment Guide (For Public Use)

Create a new bot using BotFather
 → get BOT_TOKEN.

Deploy your Node.js project on:

Render, Vercel, or Railway

Add your environment variables in their dashboard.

Use ngrok (for local testing) or public server URL as webhook.

Users can then directly search your bot in Telegram and use it instantly.

🧠 Project Learnings

Integration of AI (Gemini) with real-time chat environments.

Using MongoDB for persistent conversational data.

Understanding Telegram bot architecture and webhook management.

Building a meaningful user experience with AI-driven personalization.

🌍 Future Scope

Add daily streaks, leaderboards, and habit reminders.

Integrate voice input and speech-to-text for faster logging.

Support multi-language motivation (Gemini multilingual prompts).

Provide personal growth analytics over time.

🧑‍💻 Author

👩‍💻 Bidisha Kundu
Second-Year Computer Science Student | AI & Full-Stack Enthusiast
🔗 LinkedIn
 | GitHub

⭐ Contribute

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

🏁 License

This project is licensed under the MIT License.