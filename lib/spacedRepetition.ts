// Spaced Repetition Algorithm for effective learning

export interface ReviewSession {
  wordId: string;
  lastReviewed: Date;
  nextReview: Date;
  easeFactor: number; // EF starts at 2.5
  interval: number; // days
  repetitions: number;
}

export interface ReviewResult {
  success: boolean;
  easeFactor: number;
  interval: number;
  nextReview: Date;
}

/**
 * Calculate next review date using SM-2 algorithm (SuperMemo 2)
 */
export function calculateReview(
  review: ReviewSession,
  quality: number // 0-5: 0=total blackout, 5=perfect response
): ReviewResult {
  const success = quality >= 3;
  let easeFactor = review.easeFactor;
  let interval = review.interval;
  let repetitions = review.repetitions;

  if (success) {
    // Update ease factor
    easeFactor = Math.max(1.3, review.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions++;
  } else {
    // Reset on failure
    repetitions = 0;
    interval = 1;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    success,
    easeFactor,
    interval,
    nextReview,
  };
}

/**
 * Get words that need to be reviewed today
 */
export function getWordsForReview(
  reviews: ReviewSession[],
  today: Date = new Date()
): string[] {
  const todayStr = today.toDateString();
  
  return reviews
    .filter(r => {
      const nextReviewStr = r.nextReview.toDateString();
      return nextReviewStr <= todayStr;
    })
    .map(r => r.wordId);
}

/**
 * Initialize a new review session
 */
export function initializeReview(wordId: string): ReviewSession {
  return {
    wordId,
    lastReviewed: new Date(),
    nextReview: new Date(), // Review tomorrow
    easeFactor: 2.5,
    interval: 1,
    repetitions: 0,
  };
}

/**
 * Calculate mastery level (0-100)
 */
export function calculateMastery(review: ReviewSession): number {
  if (review.repetitions === 0) return 0;
  
  const baseMastery = Math.min(100, review.repetitions * 20);
  const timeBonus = Math.min(30, review.interval * 5);
  
  return Math.min(100, baseMastery + timeBonus);
}

