// Utility function for cross-platform speech synthesis
// iOS Safari requires careful handling of speech synthesis

let speechSynthesisAvailable = false;
let speechInstance: SpeechSynthesis | null = null;

if (typeof window !== 'undefined') {
  speechSynthesisAvailable = 'speechSynthesis' in window;
  speechInstance = window.speechSynthesis;
}

export function speak(text: string, options: {
  lang?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
} = {}): void {
  if (!speechSynthesisAvailable || !speechInstance) {
    console.warn('Speech synthesis not available');
    return;
  }

  try {
    // Cancel any ongoing speech to avoid conflicts
    speechInstance.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang || 'en-US';
    utterance.rate = options.rate ?? 0.8;
    utterance.pitch = options.pitch ?? 1;
    utterance.volume = options.volume ?? 1;

    // For iOS, we need to wait a bit before speaking
    setTimeout(() => {
      if (speechInstance) {
        speechInstance.speak(utterance);
      }
    }, 50);
  } catch (error) {
    console.error('Error in speech synthesis:', error);
  }
}

export function stopSpeech(): void {
  if (speechInstance) {
    speechInstance.cancel();
  }
}

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

