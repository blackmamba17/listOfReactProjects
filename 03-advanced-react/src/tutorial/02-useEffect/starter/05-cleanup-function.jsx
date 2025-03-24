import React, { useEffect } from 'react';
import shaka from 'shaka-player';

export const VideoPlayer = ({ videoUrl }) => {
  useEffect(() => {
    const player = new shaka.Player(document.getElementById('video'));

    player.load(videoUrl).then(() => {
      console.log('Video caricato con successo!');
    }).catch((error) => {
      console.error('Errore nel caricamento del video', error);
    });

    return () => {
      player.destroy();
    };
  }, [videoUrl]);

  return (
    <div>
      <video id="video" width="600" height="400" controls>
        Il tuo browser non supporta il video.
      </video>
    </div>
  );
};



