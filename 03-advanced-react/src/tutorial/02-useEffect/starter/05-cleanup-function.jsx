import { useEffect, useState } from "react";

const CleanupFunction = () => {

  /*  
    mp4 coded via hevc works with this
  let obj = document.createElement('video')
    console.log(obj.canPlayType('video/mp4'));
  
    return (
      <div>
        <video controls id="video" style={{ width: "500px", height: "500px" }}>
          <source src="video.mp4" type="video/mp4;" />
        </video>
  
  
      </div>
    ); */
  return (
    <>
      test hevc
      <script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@4/+esm"></script>
      <media-controller>
        <video slot="media" src="https://stream.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/high.mp4" crossorigin>
          <track label="thumbnails" default kind="metadata" src="https://image.mux.com/A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg/storyboard.vtt" />
        </video>
        <media-control-bar>
          <media-play-button></media-play-button>
          <media-mute-button></media-mute-button>
          <media-volume-range></media-volume-range>
          <media-time-range></media-time-range>
          <media-pip-button></media-pip-button>
          <media-fullscreen-button></media-fullscreen-button>
        </media-control-bar>
      </media-controller>
    </>
  )
};

export default CleanupFunction;
