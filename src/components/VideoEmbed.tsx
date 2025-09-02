// Dies ist eine wiederverwendbare Komponente, um YouTube-Videos einfach und konsistent einzubetten.
// Sie kümmert sich darum, aus verschiedenen YouTube-Link-Formaten die korrekte Video-ID zu extrahieren.

import React from 'react';

// 'interface' definiert, welche "Props" (Eigenschaften) diese Komponente erwartet.
interface VideoEmbedProps {
  videoId: string; // Kann eine reine Video-ID, eine URL oder eine ID mit Parametern sein.
  title: string;   // Der Titel des Videos (wichtig für Barrierefreiheit).
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
  
  // Diese Funktion extrahiert die 11-stellige YouTube-Video-ID aus verschiedenen URL-Formaten.
  const getYouTubeId = (idOrUrl: string): string => {
    // Ein "Regular Expression" (Regex) sucht nach Mustern in Text.
    // Dieser Regex erkennt Standard-, Kurz- und Einbettungs-URLs von YouTube.
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
    const match = idOrUrl.match(regex);
    // Wenn ein passendes URL-Format gefunden wurde, wird die ID zurückgegeben.
    if (match && match[1]) {
      return match[1];
    }
    // Falls es keine URL war, nehmen wir an, es ist bereits eine ID (evtl. mit unerwünschten Parametern).
    // Wir entfernen alles nach einem '&' oder '?', um eine saubere ID zu erhalten.
    return idOrUrl.split('&')[0].split('?')[0];
  };

  // Ruft die Funktion auf, um die saubere Video-ID zu erhalten.
  const cleanVideoId = getYouTubeId(videoId);

  return (
    <div>
      {/* Dieser Container sorgt für das korrekte 16:9-Seitenverhältnis des Videos. */}
      <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700">
        <iframe
          // Erstellt die finale Einbettungs-URL für das YouTube-Video.
          // Der 'origin'-Parameter hilft, Einbettungsprobleme in bestimmten Umgebungen (z.B. lokale Entwicklung) zu vermeiden.
          src={`https://www.youtube.com/embed/${cleanVideoId}?origin=${window.location.origin}`}
          title={title}
          frameBorder="0"
          // 'allow' gibt an, welche Browser-Features das Video nutzen darf.
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {/* Zeigt den Titel des Videos unter dem Player an. */}
      <h3 className="text-white text-lg font-semibold mt-4 text-center md:text-left">{title}</h3>
    </div>
  );
};

export default VideoEmbed;
