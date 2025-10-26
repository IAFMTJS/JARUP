export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function calculateStreak(lastActiveDate: Date): number {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - lastActiveDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 1 ? 1 : 0;
}

export function calculateLevel(totalXP: number): number {
  return Math.floor(totalXP / 500) + 1;
}

export function getLevelProgress(totalXP: number): number {
  const currentLevel = Math.floor(totalXP / 500);
  const nextLevelXP = (currentLevel + 1) * 500;
  const progress = ((totalXP % 500) / 500) * 100;
  return progress;
}

