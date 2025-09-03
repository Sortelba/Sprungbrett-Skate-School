// src/utils/playSound.ts

// Ein einfacher, aber robuster Helfer zum Abspielen von Sound-Dateien.
// Erstellt bei jedem Aufruf ein neues Audio-Objekt, um Probleme mit überlappenden Sounds zu vermeiden,
// und fängt Fehler ab, die durch Browser-Autoplay-Richtlinien entstehen können.
export const playSound = (soundFile: string) => {
  try {
    const audio = new Audio(soundFile);
    // .play() gibt ein Promise zurück. Wir müssen es behandeln, um Konsolenfehler zu vermeiden.
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(error => {
        // Dieser Fehler tritt häufig auf, wenn der Browser das automatische Abspielen verhindert.
        // Die Nachricht wird in der Entwicklerkonsole angezeigt, stört aber den Benutzer nicht.
        console.error(`Fehler beim Abspielen des Sounds (${soundFile}):`, error);
      });
    }
  } catch (error) {
    console.error(`Das Audio-Objekt für ${soundFile} konnte nicht erstellt werden:`, error);
  }
};
