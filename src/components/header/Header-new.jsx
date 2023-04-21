import React, { useState } from "react";
import "./header.css";
import loc from "../../assets/location-logo.svg";
import cal from "../../assets/calender-logo.svg";
import he from "../../assets/header-image.png";
import bg_header from "../../assets/home-page/BG.png";
import bg_star from "../../assets/home-page/star-line.png";
import play from "../../assets/home-page/play-button.png";
import pause from "../../assets/home-page/pause-button.png";
import music_gif from "../../assets/home-page/music-gif.png";
import Marqueuecomponent from "./Marqueuecomponent";
import togglePlays from "../../assets/home-page/Elegy.mp3";

const Headernew = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const [enableoverlay, setEnableOverlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    const audio = document.getElementById("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };
  return (
    <section id="header">
      <div className="header-wrapper image-container">
        <img src={bg_header} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
          className="foreground-image "
        >
          <div className="header-head">
            <div className="music-player">
              <audio className="play" id="audio" src={togglePlays} />
              <button onClick={togglePlay}>
                {isPlaying ? (
                  <img src={pause} alt="" />
                ) : (
                  <img src={play} alt="" />
                )}
              </button>
              <img src={music_gif} alt="" />
            </div>
            <div className="text-image-wrap">
              <p className="font-styles">CODe DESIGN WEEK</p>
            </div>
          </div>
          <div className="loc-cal">
            <div>
              <img src={loc} alt="location" />
              <h3>CHRIST COLLEGE OF ENGINEERING, IRINJALAKUDA</h3>
            </div>
            <div>
              <img src={cal} alt="calander" />
              <h3>22 - 28 MAY 2023</h3>
            </div>
          </div>
          <div className="twinkle-line-image">
            <img src={bg_star} alt="" />
          </div>
          <div className="design-arrow">
            <img src={he} alt="" />
          </div>
        </div>
      </div>
      <Marqueuecomponent />
    </section>
  );
};

export default Headernew;
