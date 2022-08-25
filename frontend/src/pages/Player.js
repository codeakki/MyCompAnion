import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"

const Players =() => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://web.opendrive.com/api/v1/download/file.json/MzBfMjg1NTA3NzJf?temp_key=V%AC%B3m9%DBA%15Km%02%85%AAmz%BD%B4%DBM%F6%D0Z%E8%9Bm-j%CBb%9E%B4%B6%8D%B4%0E%28%1E%B2%D8%A7%83m%1Cn%C7%B6%D2w%1E%AE%DD%B4zx%25%8A%C8v%D0I%EF%8A%BA%27%99%E9%EDj%5D%B4.%8A%24%8Ax6%D0%E8%BAwf%A7&inline=1"
      width="100px"
      height="100px"
    />
  );
};
export default Players;