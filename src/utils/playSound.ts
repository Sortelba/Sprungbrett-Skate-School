// src/utils/playSound.ts

// Diese Datei verwaltet die gesamte Audiowiedergabe mit der Web Audio API, um die Zuverlässigkeit zu erhöhen.

const audioManager = (() => {
  let audioContext: AudioContext | null = null;
  const audioBuffers: Map<string, AudioBuffer> = new Map();
  let isInitialized = false;

  // Initialisiert den AudioContext. Muss durch eine Benutzeraktion (z. B. Klick) aufgerufen werden.
  const init = () => {
    if (isInitialized || typeof window === 'undefined') return;
    try {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      // Ein vom Browser unterbrochener Kontext wird hier wieder aufgenommen.
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      isInitialized = true;
    } catch (e) {
      console.error('Web Audio API wird von diesem Browser nicht unterstützt.', e);
    }
  };

  // Lädt eine Sound-Datei und speichert den dekodierten Puffer zwischen, um die Leistung zu verbessern.
  const loadSound = async (url: string): Promise<AudioBuffer | null> => {
    if (!audioContext) return null;
    if (audioBuffers.has(url)) return audioBuffers.get(url)!; // Gibt zwischengespeicherten Puffer zurück
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      audioBuffers.set(url, audioBuffer); // Speichert den neuen Puffer
      return audioBuffer;
    } catch (error) {
      console.error(`Fehler beim Laden der Audiodatei: ${url}`, error);
      return null;
    }
  };

  // Spielt einen Sound ab.
  const play = async (url: string) => {
    if (!audioContext || !isInitialized) {
        console.warn('Audio ist noch nicht initialisiert. Der Benutzer muss zuerst mit der Seite interagieren.');
        return;
    }
    // Stellt sicher, dass der Kontext aktiv ist, bevor etwas abgespielt wird.
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }
    const audioBuffer = await loadSound(url);
    if (audioBuffer) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start(0);
    }
  };

  return { init, playSound: play };
})();

// Exportiert die init-Funktion, die bei der ersten Benutzerinteraktion aufgerufen werden muss.
export const initAudio = audioManager.init;
// Exportiert die playSound-Funktion für die Verwendung in den Spielen.
export const playSound = audioManager.playSound;
