// src/utils/audioManager.ts

class AudioManager {
  private audioContext: AudioContext | null = null;
  private audioBuffers: Map<string, AudioBuffer> = new Map();
  private isInitialized = false;

  /**
   * Initializes the AudioContext. Must be called from a user gesture (e.g., click).
   * This is crucial to comply with browser autoplay policies.
   */
  public init() {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      // Resume the context if it's in a suspended state (which it is by default on most browsers).
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume();
      }
      this.isInitialized = true;
      console.log('Audio system initialized and unlocked.');
    } catch (e) {
      console.error('Web Audio API is not supported in this browser.', e);
    }
  }

  /**
   * Loads a sound from a URL, decodes it, and caches it for future use.
   * @param url The path to the sound file.
   * @returns The decoded AudioBuffer or null if an error occurs.
   */
  private async loadSound(url: string): Promise<AudioBuffer | null> {
    if (!this.audioContext) {
      console.warn('AudioContext not initialized. Cannot load sound.');
      return null;
    }

    // Return the sound from cache if it has been loaded before.
    if (this.audioBuffers.has(url)) {
      return this.audioBuffers.get(url)!;
    }

    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
      this.audioBuffers.set(url, audioBuffer);
      return audioBuffer;
    } catch (e) {
      console.error(`Error loading or decoding audio file: ${url}`, e);
      return null;
    }
  }

  /**
   * Plays a sound from the given URL.
   * It will first try to load (and cache) the sound, then play it.
   * @param url The path to the sound file (e.g., '/sounds/jump.mp3').
   */
  public async playSound(url: string) {
    if (!this.isInitialized) {
      console.warn(`Audio not unlocked yet. Sound "${url}" will not play. Please interact with the page first.`);
      return;
    }
    if (!this.audioContext) {
        console.error("AudioContext is not available.");
        return;
    }

    const audioBuffer = await this.loadSound(url);
    if (audioBuffer) {
      try {
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        source.start(0);
      } catch (e) {
        console.error(`Error playing sound "${url}":`, e);
      }
    }
  }
}

// Create a single, global instance of the AudioManager to be used throughout the app.
const audioManager = new AudioManager();

export default audioManager;
