// Utility function for cross-platform speech synthesis
// iOS Safari requires careful handling of speech synthesis

let speechSynthesisAvailable = false;
let speechInstance: SpeechSynthesis | null = null;
let isInitialized = false;

// Detect iOS
function isIOS(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (typeof window !== 'undefined') {
  speechSynthesisAvailable = 'speechSynthesis' in window;
  if (speechSynthesisAvailable) {
    speechInstance = window.speechSynthesis;
  }
}

function initializeSpeech(): void {
  if (!speechInstance || isInitialized) return;
  
  try {
    // Initialize by getting voices (triggers iOS to initialize)
    const voices = speechInstance.getVoices();
    isInitialized = true;
    console.log('Speech initialized with', voices.length, 'voices');
  } catch (error) {
    console.error('Error initializing speech:', error);
  }
}

// Initialize on page load
if (typeof window !== 'undefined' && speechInstance) {
  // For iOS, we need to initialize speech on the first user interaction
  const initializeOnInteraction = () => {
    initializeSpeech();
    window.removeEventListener('touchstart', initializeOnInteraction);
    window.removeEventListener('click', initializeOnInteraction);
  };
  
  window.addEventListener('touchstart', initializeOnInteraction);
  window.addEventListener('click', initializeOnInteraction);
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

  // Initialize if not already done
  if (!isInitialized) {
    initializeSpeech();
  }

  try {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang || 'en-US';
    utterance.rate = options.rate ?? 0.8;
    utterance.pitch = options.pitch ?? 1;
    utterance.volume = options.volume ?? 1;

    // Add event listeners to handle errors
    utterance.onstart = () => {
      console.log('Speech started');
    };

    utterance.onerror = (event) => {
      console.error('Speech error:', event);
    };

    utterance.onend = () => {
      console.log('Speech ended');
    };

    // Cancel any ongoing speech
    speechInstance.cancel();

    // Speak immediately (iOS needs this to be synchronous)
    speechInstance.speak(utterance);
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

