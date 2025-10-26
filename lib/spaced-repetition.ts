export interface WordProgress {
  wordId: string;
  timesCorrect: number;
  timesIncorrect: number;
  lastReviewed: number; // timestamp
  nextReview: number; // timestamp
  masteryLevel: 'new' | 'learning' | 'mastered';
  interval: number; // days
  ease: number; // difficulty multiplier, starts at 2.5
}

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;

export function initializeWordProgress(wordId: string): WordProgress {
  return {
    wordId,
    timesCorrect: 0,
    timesIncorrect: 0,
    lastReviewed: Date.now(),
    nextReview: Date.now(),
    masteryLevel: 'new',
    interval: 0,
    ease: DEFAULT_EASE,
  };
}

export function getWordProgress(wordId: string): WordProgress | null {
  if (typeof window === 'undefined') return null;
  
  const key = `jarup_word_${wordId}`;
  const stored = localStorage.getItem(key);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function saveWordProgress(progress: WordProgress): void {
  if (typeof window === 'undefined') return;
  
  const key = `jarup_word_${progress.wordId}`;
  localStorage.setItem(key, JSON.stringify(progress));
}

export function reviewWord(wordId: string, isCorrect: boolean): WordProgress {
  const progress = getWordProgress(wordId) || initializeWordProgress(wordId);
  
  if (isCorrect) {
    progress.timesCorrect++;
    
    // Calculate next review interval using SM-2 algorithm
    if (progress.masteryLevel === 'new') {
      progress.masteryLevel = 'learning';
      progress.interval = 1; // Review tomorrow
    } else if (progress.masteryLevel === 'learning') {
      if (progress.timesCorrect >= 3) {
        progress.masteryLevel = 'mastered';
        progress.interval = Math.floor(progress.interval * progress.ease);
      } else {
        progress.interval = 1;
      }
    } else {
      // Mastered - increase interval
      progress.interval = Math.floor(progress.interval * progress.ease);
    }
    
    progress.nextReview = Date.now() + progress.interval * 24 * 60 * 60 * 1000;
    progress.lastReviewed = Date.now();
  } else {
    // Incorrect - reset difficulty and decrease interval
    progress.timesIncorrect++;
    progress.masteryLevel = 'learning';
    progress.ease = Math.max(MIN_EASE, progress.ease - 0.2);
    progress.interval = 1;
    progress.nextReview = Date.now();
    progress.lastReviewed = Date.now();
  }
  
  saveWordProgress(progress);
  return progress;
}

export function getWordsDueForReview(allWordIds: string[]): string[] {
  const now = Date.now();
  return allWordIds.filter(wordId => {
    const progress = getWordProgress(wordId);
    if (!progress) return true; // New words are considered due
    return now >= progress.nextReview;
  });
}

export function getWordsByMasteryLevel(
  allWordIds: string[],
  level: 'new' | 'learning' | 'mastered'
): string[] {
  return allWordIds.filter(wordId => {
    const progress = getWordProgress(wordId);
    if (!progress) return level === 'new';
    return progress.masteryLevel === level;
  });
}

export function calculateMasteryPercentage(allWordIds: string[]): number {
  if (allWordIds.length === 0) return 0;
  
  const mastered = allWordIds.filter(wordId => {
    const progress = getWordProgress(wordId);
    if (!progress) return false;
    return progress.masteryLevel === 'mastered';
  });
  
  return Math.round((mastered.length / allWordIds.length) * 100);
}

export function getAllWordProgress(): WordProgress[] {
  if (typeof window === 'undefined') return [];
  
  const progress: WordProgress[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith('jarup_word_')) {
      try {
        const value = localStorage.getItem(key);
        if (value) {
          progress.push(JSON.parse(value));
        }
      } catch {
        // Skip invalid entries
      }
    }
  }
  
  return progress;
}

