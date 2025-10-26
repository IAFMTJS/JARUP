export interface UserProgress {
  completedLessons: string[];
  wordsLearned: number;
  charactersMastered: string[];
  streak: number;
  totalXP: number;
  stats: {
    japanese: {
      words: number;
      characters: number;
      speaking: number;
    };
    russian: {
      words: number;
      characters: number;
      speaking: number;
    };
  };
  weeklyActivity: Array<{ day: string; words: number; lessons: number }>;
  lastActiveDate: string;
}

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  wordsLearned: 0,
  charactersMastered: [],
  streak: 0,
  totalXP: 0,
  stats: {
    japanese: {
      words: 0,
      characters: 0,
      speaking: 0,
    },
    russian: {
      words: 0,
      characters: 0,
      speaking: 0,
    },
  },
  weeklyActivity: [
    { day: 'Mon', words: 0, lessons: 0 },
    { day: 'Tue', words: 0, lessons: 0 },
    { day: 'Wed', words: 0, lessons: 0 },
    { day: 'Thu', words: 0, lessons: 0 },
    { day: 'Fri', words: 0, lessons: 0 },
    { day: 'Sat', words: 0, lessons: 0 },
    { day: 'Sun', words: 0, lessons: 0 },
  ],
  lastActiveDate: new Date().toISOString().split('T')[0],
};

const STORAGE_KEY = 'jarup_user_progress';

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return DEFAULT_PROGRESS;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return DEFAULT_PROGRESS;
    }
    const progress = JSON.parse(stored);
    return {
      ...DEFAULT_PROGRESS,
      ...progress,
      stats: {
        ...DEFAULT_PROGRESS.stats,
        ...progress.stats,
      },
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress to localStorage:', error);
  }
}

export function updateProgress(updates: Partial<UserProgress>): void {
  const current = getProgress();
  const updated = {
    ...current,
    ...updates,
    stats: {
      ...current.stats,
      ...updates.stats,
    },
  };
  saveProgress(updated);
}

export function completeLesson(lessonId: string): void {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    updateProgress({ completedLessons: progress.completedLessons });
  }
}

export function addWordsLearned(words: number, language: 'japanese' | 'russian'): void {
  const progress = getProgress();
  updateProgress({
    stats: {
      ...progress.stats,
      [language]: {
        ...progress.stats[language],
        words: progress.stats[language].words + words,
      },
    },
    wordsLearned: progress.wordsLearned + words,
  });
}

export function updateStreak(): void {
  const progress = getProgress();
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  // If last active was yesterday, increment streak; if it was before yesterday, reset to 1
  if (progress.lastActiveDate === yesterday) {
    progress.streak += 1;
  } else if (progress.lastActiveDate !== today) {
    progress.streak = 1;
  }

  progress.lastActiveDate = today;
  updateProgress({
    streak: progress.streak,
    lastActiveDate: progress.lastActiveDate,
  });
}

export function addXP(amount: number): void {
  const progress = getProgress();
  updateProgress({ totalXP: progress.totalXP + amount });
}

export function resetProgress(): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
}

