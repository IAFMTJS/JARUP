# JARUP Setup Guide

## Quick Start

### Prerequisites

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **MongoDB**
   - **Option 1**: Local installation
     - Download from: https://www.mongodb.com/try/download/community
     - Start service: `mongod`
   - **Option 2**: MongoDB Atlas (cloud)
     - Free tier available at: https://www.mongodb.com/atlas
   - **Option 3**: Docker
     ```bash
     docker run -d -p 27017:27017 --name mongodb mongo
     ```

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/jarup
   
   # For MongoDB Atlas (replace with your connection string)
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jarup
   
   # API Configuration
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Open your browser: http://localhost:3000

### Production Build

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Docker Setup (Optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/jarup
    depends_on:
      - mongo
  
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

Run with Docker:
```bash
docker-compose up
```

## Troubleshooting

### MongoDB Connection Issues

**Problem**: "Cannot connect to MongoDB"
**Solutions**:
1. Ensure MongoDB is running: `mongod` or `docker ps` for Docker
2. Check connection string in `.env.local`
3. For local MongoDB: `mongosh` to test connection

### Port Already in Use

**Problem**: "Port 3000 already in use"
**Solutions**:
1. Kill the process: `npx kill-port 3000`
2. Use a different port: Change in `package.json` scripts

### Module Not Found Errors

**Problem**: "Cannot find module"
**Solutions**:
1. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
2. Clear Next.js cache: `rm -rf .next`
3. Ensure Node.js version is 18+

### Speech Recognition Not Working

**Problem**: Microphone access denied
**Solutions**:
1. Use HTTPS (required for speech recognition)
2. Grant microphone permissions in browser
3. For development, use localhost exceptions

### Canvas Drawing Issues

**Problem**: Writing board not responding
**Solutions**:
1. Enable JavaScript in browser
2. Check browser console for errors
3. Try a different browser (Chrome/Firefox recommended)

## Features Overview

### 1. Home Dashboard
- Switch between Japanese and Russian
- View progress statistics
- Access all modules
- Daily challenges

### 2. Lessons
- Start from basics
- Progressive difficulty
- Interactive exercises
- Audio pronunciation

### 3. Writing Practice
- Virtual writing board
- Touch/mouse support
- Stroke order practice
- Character feedback

### 4. Reading Exercises
- Letter recognition
- Word translation
- Sentence comprehension
- Audio support

### 5. Speaking Practice
- Repeat after me
- Speech recognition
- AI conversation
- Pronunciation feedback

### 6. Games
- Flashcards
- Memory matching
- Typing speed
- Vocabulary matching

### 7. Progress Tracking
- Detailed statistics
- Charts and graphs
- Achievements
- Personal word lists

### 8. Settings
- Language preferences
- Notifications
- Profile management

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Mobile Support

- Responsive design
- Touch-friendly interface
- Works on tablets and phones

## Next Steps

1. Explore the app features
2. Complete your first lesson
3. Practice writing characters
4. Try the speaking exercises
5. Play games to reinforce learning
6. Track your progress

Enjoy learning Japanese and Russian! 🇯🇵🇷🇺

