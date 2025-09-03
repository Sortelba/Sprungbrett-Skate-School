// src/utils/playSound.ts

/**
 * Plays a sound effect from a given URL.
 * Creates a new Audio object for each playback to ensure reliability
 * across different browsers and scenarios. This approach avoids issues
 * with overlapping sounds and most browser autoplay policies.
 * @param url The path to the sound file (e.g., '/sounds/jump.mp3').
 */
export const playSound = (url: string) => {
  try {
    const audio = new Audio(url);
    // The play() method returns a Promise. We handle potential errors
    // to prevent the application from crashing if a sound is blocked by the browser.
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // This error is common if the sound wasn't triggered by a direct user action.
        // We log it for debugging purposes but don't interrupt the user experience.
        console.error(`Error playing sound "${url}":`, error);
      });
    }
  } catch (e) {
    console.error(`Could not create or play audio file at "${url}":`, e);
  }
};