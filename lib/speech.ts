// Utility function for cross-platform speech synthesis
// iOS Safari requires careful handling of speech synthesis

let speechSynthesisAvailable = false;
let speechInstance: SpeechSynthesis | null = null;
let isInitialized = false;
let availableVoices: SpeechSynthesisVoice[] = [];

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
    availableVoices = voices;
    isInitialized = true;
    console.log('Speech initialized with', voices.length, 'voices');
    
    // Log available Japanese and Russian voices
    const japaneseVoices = voices.filter(v => v.lang.includes('ja'));
    const russianVoices = voices.filter(v => v.lang.includes('ru'));
    console.log('Japanese voices:', japaneseVoices.map(v => v.name));
    console.log('Russian voices:', russianVoices.map(v => v.name));
  } catch (error) {
    console.error('Error initializing speech:', error);
  }
}

function findVoiceForLang(lang: string): SpeechSynthesisVoice | null {
  if (!speechInstance || availableVoices.length === 0) {
    availableVoices = speechInstance?.getVoices() || [];
  }
  
  // Try to find a native voice for the language
  const targetLang = lang.toLowerCase();
  
  // For Japanese
  if (targetLang.includes('ja')) {
    // Look for Japanese voices (prefer Google, Yuna, or native names)
    const preferredNames = ['google', 'yuna', 'sayaka', 'yukari'];
    for (const name of preferredNames) {
      const voice = availableVoices.find(v => 
        v.lang.includes('ja') && v.name.toLowerCase().includes(name.toLowerCase())
      );
      if (voice) return voice;
    }
    // Fallback to any Japanese voice
    const anyJapanese = availableVoices.find(v => v.lang.includes('ja'));
    if (anyJapanese) return anyJapanese;
  }
  
  // For Russian
  if (targetLang.includes('ru')) {
    // Look for Russian voices (prefer Katya, Milena, or other Russian names)
    const preferredNames = ['katya', 'milena', 'yuri', 'russian'];
    for (const name of preferredNames) {
      const voice = availableVoices.find(v => 
        v.lang.includes('ru') && v.name.toLowerCase().includes(name.toLowerCase())
      );
      if (voice) return voice;
    }
    // Fallback to any Russian voice
    const anyRussian = availableVoices.find(v => v.lang.includes('ru'));
    if (anyRussian) return anyRussian;
  }
  
  // Default to any matching language
  const matchingVoice = availableVoices.find(v => v.lang.toLowerCase().includes(targetLang));
  if (matchingVoice) return matchingVoice;
  
  return null;
}

// Initialize on page load
if (typeof window !== 'undefined' && speechInstance) {
  // Listen for voiceschanged event (important for some browsers)
  speechInstance.addEventListener('voiceschanged', () => {
    if (!isInitialized) {
      initializeSpeech();
    } else {
      // Update available voices
      availableVoices = speechInstance?.getVoices() || [];
    }
  });
  
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
    // Cancel any ongoing speech
    speechInstance.cancel();

    // Find and set the appropriate voice for the language
    const voice = findVoiceForLang(options.lang || 'en-US');
    
    // Create the utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = options.lang || 'en-US';
    utterance.rate = options.rate ?? 0.8;
    utterance.pitch = options.pitch ?? 1;
    utterance.volume = options.volume ?? 1;
    
    // Set the voice if found
    if (voice) {
      utterance.voice = voice;
      console.log('Using voice:', voice.name, 'for language:', options.lang);
    } else {
      console.warn('No specific voice found for', options.lang, ', using default');
    }

    // Add event listeners to handle errors
    utterance.onstart = () => {
      console.log('Speech started for:', text);
    };

    utterance.onerror = (event) => {
      console.error('Speech error:', event);
    };

    utterance.onend = () => {
      console.log('Speech ended');
    };

    // For iOS Chrome, wait a bit before speaking
    if (isIOSChrome()) {
      setTimeout(() => {
        if (speechInstance) {
          speechInstance.speak(utterance);
        }
      }, 100);
    } else {
      // Speak immediately for other browsers
      speechInstance.speak(utterance);
    }
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

