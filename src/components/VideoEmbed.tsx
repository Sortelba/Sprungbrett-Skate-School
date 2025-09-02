import React from 'react';

interface VideoEmbedProps {
  videoId: string; // Can be a video ID, a URL, or an ID with params
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
  const getYouTubeId = (idOrUrl: string): string => {
    // This regex handles:
    // - Standard watch URLs (https://www.youtube.com/watch?v=...)
    // - Shortened youtu.be URLs (https://youtu.be/...)
    // - Embed URLs (https://www.youtube.com/embed/...)
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|)([\w-]{11})(?:\S+)?/;
    const match = idOrUrl.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    // If no URL format matches, assume it's an ID or ID with params and clean it.
    return idOrUrl.split('&')[0].split('?')[0];
  };

  const cleanVideoId = getYouTubeId(videoId);

  return (
    <div>
      <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700">
        <iframe
          // By adding the origin parameter, we can sometimes resolve embedding issues
          // when running on platforms like localhost or sandboxed environments.
          src={`https://www.youtube.com/embed/${cleanVideoId}?origin=${window.location.origin}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <h3 className="text-white text-lg font-semibold mt-4 text-center md:text-left">{title}</h3>
    </div>
  );
};

export default VideoEmbed;