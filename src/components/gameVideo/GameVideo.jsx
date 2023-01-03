import "./style.scss";
import SoloarSystem from "./SolarSystem";
import { Parallax } from "react-scroll-parallax";
function GameVideo() {
  return (
    <Parallax>
      <div className="gameVideo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ifZA6IMeLs8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <SoloarSystem />
      </div>
    </Parallax>
  );
}

export default GameVideo;
