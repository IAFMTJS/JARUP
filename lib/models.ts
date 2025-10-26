export interface User {
  _id?: string;
  email: string;
  name: string;
  currentLanguage: 'japanese' | 'russian';
  streak: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  _id?: string;
  userId: string;
  language: 'japanese' | 'russian';
  wordsLearned: number;
  charactersMastered: string[];
  lessonProgress: {
    [lessonId: string]: {
      completed: boolean;
      score: number;
      completedAt?: Date;
    };
  };
  speakingLevel: number;
  readingLevel: number;
  writingLevel: number;
  lastActiveAt: Date;
}

export interface Lesson {
  id: string;
  language: 'japanese' | 'russian';
  category: string;
  title: string;
  content: {
    type: 'text' | 'audio' | 'image';
    data: string;
  }[];
  exercises: Exercise[];
  order: number;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'typing' | 'matching' | 'fill-blank' | 'audio';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

export interface GameScore {
  _id?: string;
  userId: string;
  gameType: 'flashcards' | 'memory' | 'typing' | 'matching';
  language: 'japanese' | 'russian';
  score: number;
  level: number;
  playedAt: Date;
}

export interface Character {
  id: string;
  language: 'japanese' | 'russian';
  character: string;
  pronunciation: string;
  meaning: string;
  strokeOrder?: number[];
  audioUrl?: string;
}

