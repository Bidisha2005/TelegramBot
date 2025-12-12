#  🌟 Progress Companion - Your Daily Journey to Better

> An intelligent Telegram bot that tracks your daily achievements, motivates you, and generates comprehensive progress reports using AI.

![image alt](https://github.com/Bidisha2005/TelegramBot/blob/main/Telebot.jpeg?raw=true)

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen.svg)](https://www.mongodb.com/)
[![Telegraf](https://img.shields.io/badge/Telegraf-4.16-blue.svg)](https://telegraf.js.org/)
[![Google Gemini AI](https://img.shields.io/badge/Gemini-AI-orange.svg)](https://ai.google.dev/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Commands](#commands)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Daily Progress Tracker is an intelligent Telegram bot designed to help professionals track their daily achievements across various platforms (LinkedIn, Twitter, GitHub, etc.) and receive AI-generated motivational summaries. The bot leverages Google's Gemini AI to provide personalized feedback and encouragement based on your daily activities.

### 🎥 Demo

```
User: /start
Bot: 👋 Welcome! I'm your Daily Progress Tracker. Share your achievements throughout the day!

User: Updated my LinkedIn profile with new project showcase
Bot: ✅ Noted! Keep up the great work!

User: Published a thread on Twitter about React best practices
Bot: ✅ Noted! Keep up the great work!

User: /generate
Bot: 🌟 Here's your daily summary:
[AI-generated personalized motivational message with progress analysis]
```

## ✨ Features

### Core Features
- **📝 Real-time Activity Tracking**: Log your daily achievements instantly via Telegram
- **🤖 AI-Powered Summaries**: Generate intelligent daily reports using Google Gemini AI
- **💾 Persistent Storage**: All activities stored securely in MongoDB
- **📊 Progress Analytics**: Track your productivity patterns over time
- **🎯 Personalized Motivation**: Receive AI-generated encouragement tailored to your activities
- **🔒 User Privacy**: Each user's data is isolated and secure

### Advanced Features
- **Multi-platform Support**: Track activities across LinkedIn, Twitter, GitHub, Medium, etc.
- **Timezone Aware**: Correctly handles activities across different timezones
- **Conversation Context**: Bot remembers your conversation history
- **Error Handling**: Robust error management with user-friendly messages

## 🛠 Tech Stack

### Backend
- **Framework**: Telegraf (Telegram Bot Framework)
- **Database**: MongoDB with Mongoose ODM
- **AI Integration**: Gemini API
- **Environment Management**: dotenv

### Key Libraries
```json
{
  "telegraf": "^4.16.3",
  "mongoose": "^8.9.3",
  "@google/generative-ai": "^0.24.1",
  "mongodb": "^6.12.0",
  "dotenv": "^16.6.1"
}
```

## 🏗 Architecture

```
┌─────────────┐
│   Telegram  │
│    User     │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│   Telegraf Bot      │
│   (server.js)       │
└──────┬──────────────┘
       │
       ├──────────────┐
       ▼              ▼
┌─────────────┐  ┌──────────────┐
│   MongoDB   │  │  Gemini AI   │
│  (Storage)  │  │  (Analysis)  │
└─────────────┘  └──────────────┘
```

### Data Flow
1. User sends message via Telegram
2. Telegraf processes and routes the message
3. Activity stored in MongoDB with timestamp and user ID
4. On `/generate` command, all activities fetched from DB
5. Activities sent to Gemini AI for analysis
6. AI-generated summary sent back to user

## 📦 Installation

### Prerequisites
- MongoDB 6.0 or higher (local or Atlas)
- Telegram account
- Gemini API key

### Step-by-Step Setup

1. **Clone the repository**
```bash
git clone https://github.com/Bidisha2005/TelegramBot.git
cd TelegramBoT
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up MongoDB**
   - **Option A**: Local MongoDB
   ```bash
   # Install MongoDB locally
   # macOS
   brew install mongodb-community
   
   # Ubuntu
   sudo apt-get install mongodb
   
   # Start MongoDB
   mongod --dbpath /path/to/data/directory
   ```
   
   - **Option B**: MongoDB Atlas (Recommended)
     - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
     - Create a free cluster
     - Get your connection string

4. **Create Telegram Bot**
   - Open Telegram and search for [@BotFather](https://t.me/botfather)
   - Send `/newbot` command
   - Follow instructions to create your bot
   - Copy the bot token provided

5. **Get Google AI API Key**
   - Visit [Google AI Studio]
   - Create a new API key
   - Copy the key

6. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Telegram Configuration
   BOT_TOKEN=your_telegram_bot_token_here
   
   # MongoDB Configuration
   MONGODB_URI=mongodb://localhost:27017/progress_tracker
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/progress_tracker
   
   # Google AI Configuration
   GEMINI_API_KEY=your_gemini_api_key_here
   
   
   ```

7. **Start the bot**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
 
   ```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `BOT_TOKEN` | Telegram Bot Token from BotFather | Yes | - |
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `GEMINI_API_KEY` | Google Gemini AI API key | Yes | - |
| `GEMINI_MODEL` | Choose your gemini model | Yes | - |



## 🎮 Usage

### Basic Workflow

1. **Start the bot**
   ```
   /start
   ```
   Initializes the bot and welcomes you.

2. **Log your activities**
   Simply send messages describing your achievements:
   ```
   Updated my LinkedIn profile with new project
   Posted a technical blog on Medium
   Contributed to open-source project on GitHub
   Completed online course certification
   ```

3. **Generate daily summary**
   ```
   /generate
   ```
   Receives an AI-powered summary of your day with motivational insights.

4. **View your stats** (if implemented)
   ```
   /stats
   ```

5. **Clear today's activities**
   ```
   /clear
   ```

### Pro Tips

- **Be specific**: Instead of "worked on project", say "completed authentication module for e-commerce app"
- **Regular updates**: Log activities throughout the day for accurate tracking
- **Use categories**: Mention platforms (LinkedIn, GitHub, Twitter) for better categorization
- **Daily reviews**: Use `/generate` at the end of each day for reflection

## 🎯 Commands

| Command | Description | Example |
|---------|-------------|---------|
| `/start` | Initialize bot and get welcome message | `/start` |
| `/generate` | Generate AI-powered daily summary | `/generate` |
| `/stats` | View your progress statistics | `/stats` |
| `/clear` | Clear today's activities | `/clear` |
| `/help` | Show all available commands | `/help` |
| `/export` | Export activities to CSV | `/export` |



## 🚀 Future Enhancements

### Planned Features

#### Phase 1 (MVP Improvements)
- [ ] **Weekly/Monthly Reports**: Generate comprehensive weekly and monthly summaries
- [ ] **Export Functionality**: Export activities to PDF/CSV
- [ ] **Category Analytics**: Visual charts showing activity distribution
- [ ] **Streak Tracking**: Gamification with daily streak counters
- [ ] **Reminder System**: Daily reminders to log activities

#### Phase 2 (Advanced Features)
- [ ] **Multi-user Support**: Allow team collaboration and shared achievements
- [ ] **Goal Setting**: Set daily/weekly goals and track progress
- [ ] **Integration APIs**: Connect with LinkedIn, GitHub, Twitter APIs directly
- [ ] **Voice Notes**: Support voice message transcription
- [ ] **Smart Suggestions**: AI suggests next steps based on patterns
- [ ] **Analytics Dashboard**: Web dashboard for detailed analytics

#### Phase 3 (Enterprise Features)
- [ ] **Team Analytics**: Manager view for team progress
- [ ] **Custom AI Prompts**: Personalize AI response style
- [ ] **Webhook Support**: Integrate with other productivity tools
- [ ] **Mobile App**: Native iOS/Android companion apps
- [ ] **Multi-language Support**: Internationalization

### Technical Improvements
- [ ] Implement Redis caching for faster responses
- [ ] Add comprehensive unit and integration tests
- [ ] Set up CI/CD pipeline
- [ ] Implement rate limiting and abuse prevention
- [ ] Add logging and monitoring (Winston, Sentry)
- [ ] Docker containerization
- [ ] Kubernetes deployment configuration


## 👤 Author

**Bidisha Kundu**
- GitHub: [@Bidisha2005](https://github.com/Bidisha2005)
- LinkedIn:(https://www.linkedin.com/in/bidisha-kundu-41706428b/)


## 🙏 Acknowledgments

- [Telegraf](https://telegraf.js.org/) - Modern Telegram Bot Framework
- [Google Gemini AI](https://ai.google.dev/) - Powerful AI capabilities
- [MongoDB](https://www.mongodb.com/) - Flexible document database
- Inspired by productivity tracking methodologies


<div align="center">

**⭐ If you find this project useful, please consider giving it a star! ⭐**

Made with ❤️ and ☕


</div>

