import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"

const Players =() => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      width="100px"
      height="100px"
    />
  );
};
export default Players;