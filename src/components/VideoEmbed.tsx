import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => (
  <div>
    <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-gray-700">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
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

export default VideoEmbed;
