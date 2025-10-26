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

// Detect if we're on iOS Chrome
function isIOSChrome(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  return isIOS() && /CriOS|FxiOS|OPiOS/i.test(ua);
}

if (typeof window !== 'undefined') {
  speechSynthesisAvailable = 'speechSynthesis' in window;
  
  // Chrome on iOS has very limited speechSynthesis support, so we warn
  if (isIOSChrome()) {
    console.warn('Chrome on iOS has limited speech synthesis support. Consider using Safari for better audio playback.');
  }
  
  if (speechSynthesisAvailable) {
    speechInstance = window.speechSynthesis;
    
    // Test if speech synthesis actually works
    try {
      const testUtterance = new SpeechSynthesisUtterance('');
      if (!testUtterance) {
        speechSynthesisAvailable = false;
      }
    } catch (e) {
      speechSynthesisAvailable = false;
    }
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
    console.warn('Speech synthesis not available on this browser');
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

    // Cancel any ongoing speech
    speechInstance.cancel();

    // For iOS Chrome, we need to wait a bit
    const delay = isIOSChrome() ? 100 : 0;
    
    setTimeout(() => {
      if (!speechInstance) return;
      
      // Create a new utterance in case it was destroyed
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.lang = options.lang || 'en-US';
      newUtterance.rate = options.rate ?? 0.8;
      newUtterance.pitch = options.pitch ?? 1;
      newUtterance.volume = options.volume ?? 1;

      // Add event listeners to handle errors
      newUtterance.onstart = () => {
        console.log('Speech started');
      };

      newUtterance.onerror = (event) => {
        console.error('Speech error:', event);
      };

      newUtterance.onend = () => {
        console.log('Speech ended');
      };

      // Speak
      speechInstance.speak(newUtterance);
      
      // For iOS Chrome, try to resume
      if (isIOSChrome()) {
        setTimeout(() => {
          if (speechInstance && speechInstance.paused) {
            speechInstance.resume();
          }
        }, 50);
      }
    }, delay);
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

// Export function to check if we're on iOS Chrome
export function isOnIOSChrome(): boolean {
  return isIOSChrome();
}

