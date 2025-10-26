# JARUP - Japanese & Russian Language Learning App

A comprehensive, interactive language learning web application for mastering Japanese and Russian from basics to advanced level.

## 🎯 Features

### 1. **Home Dashboard**
- Progress tracking per language with visual graphs
- Quick access to all modules
- Daily challenges and streak tracking
- Language switching (Japanese/Russian)

### 2. **Lessons Module**
- **Japanese**: Hiragana → Katakana → Kanji → Grammar → Sentences
- **Russian**: Alphabet → Pronunciation → Words → Grammar → Texts
- Interactive exercises with real-time feedback
- Progressive difficulty
- Audio pronunciation support

### 3. **Writing Module**
- Virtual writing board (touch/mouse support)
- Handwriting practice for all characters
- Stroke order guidance
- Real-time feedback

### 4. **Reading Module**
- Letter → sound exercises
- Word → translation practice
- Sentence comprehension
- Audio pronunciation support
- Increasing difficulty levels

### 5. **Speaking Module**
- Repeat-after-me audio exercises
- Speech recognition feedback
- AI conversation practice
- Pronunciation scoring

### 6. **Games**
- Flashcards
- Memory matching
- Typing speed
- Vocabulary matching
- Points and badges system

### 7. **Progress & Statistics**
- Detailed analytics and graphs
- Daily streaks
- Badge achievements
- Personal word lists
- Skill distribution

### 8. **Settings**
- Language preferences
- Notification settings
- Profile management
- Sound effects control

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: MongoDB
- **Charts**: Recharts
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd JARUP
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file:
```env
MONGODB_URI=mongodb://localhost:27017/jarup
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
JARUP/
├── app/
│   ├── api/           # API routes
│   ├── lessons/       # Lesson pages
│   ├── writing/       # Writing practice
│   ├── reading/       # Reading exercises
│   ├── speaking/      # Speaking practice
│   ├── games/         # Interactive games
│   ├── progress/      # Progress tracking
│   ├── settings/      # User settings
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── lib/
│   ├── data/          # Lesson content
│   ├── models.ts      # TypeScript types
│   └── mongodb.ts     # Database connection
├── components/         # Reusable components
└── public/            # Static assets
```

## 🎓 How to Use

### For Beginners

1. **Start with Home Dashboard**
   - Choose your language (Japanese or Russian)
   - View your progress stats

2. **Begin with Lessons**
   - Click "Lessons" to see available courses
   - Start with the first unlocked lesson
   - Complete exercises to unlock more

3. **Practice Writing**
   - Go to "Writing" module
   - Practice characters on the virtual board
   - Get feedback on your strokes

4. **Improve Reading**
   - Visit "Reading" module
   - Start with letters, move to words and sentences
   - Use audio support for pronunciation

5. **Hone Speaking**
   - Use "Speaking" module
   - Repeat after audio examples
   - Chat with AI assistant

6. **Have Fun with Games**
   - Play flashcards, memory, typing
   - Earn points and badges
   - Track high scores

### Progress Tracking

- View detailed stats in "Progress" page
- Track daily streaks
- See skill distribution
- Monitor word lists
- Celebrate achievements

## 🌟 Key Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Offline Mode**: Core features work without internet
- **Gamification**: Points, badges, streaks, leaderboards
- **Progress Tracking**: Comprehensive analytics
- **Audio Support**: Native pronunciation
- **Speech Recognition**: Real-time feedback
- **Handwriting**: Touch-friendly writing practice
- **AI Conversation**: Practice with chatbot

## 🔧 Configuration

### MongoDB Setup

For local development:
```bash
# Install MongoDB
# Start MongoDB service
mongod

# Or use Docker
docker run -d -p 27017:27017 mongo
```

### Environment Variables

Create `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/jarup
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📝 Notes

- Speech recognition requires HTTPS in production
- Audio features need browser permissions
- Canvas writing works with touch devices
- Progress is saved to MongoDB

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Social features (leaderboards)
- [ ] Advanced AI conversations
- [ ] Mobile apps (iOS/Android)
- [ ] More languages
- [ ] Community features
- [ ] Video lessons
- [ ] Spaced repetition

## 📄 License

MIT License - feel free to use this project for learning and education.

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

Built with ❤️ for language learners around the world.

