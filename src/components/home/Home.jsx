import { useEffect, useRef } from "react";
import "./style.scss";
function Home() {
  const parallax = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", function (event) {
      var top = this.window.pageYOffset;
      var layers = document.getElementsByClassName("parallax");
      var layer, speed, yPos;
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        yPos = -((top * speed) / 100);
        layer.style.transform = `translateY(${yPos}px)`;
      }
    });
    console.log("loaded");
  }, []);

  return (
    <div className="keyart" id="parallax" ref={parallax}>
      <div className="keyart_layer parallax" id="keyart-0" data-speed="1"></div>
      <div
        className="keyart_layer parallax"
        id="keyart-1"
        data-speed="10"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-2"
        data-speed="20"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-3"
        data-speed="35"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-4"
        data-speed="65"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-5"
        data-speed="45"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-6"
        data-speed="70"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-7"
        data-speed="75"
      ></div>
      <h1>Meta Virus</h1>
      <img
        id="rockBoundary"
        src={process.env.PUBLIC_URL + "/img/bg_10.png"}
        alt="rock"
      />
    </div>
  );
}
export default Home;
