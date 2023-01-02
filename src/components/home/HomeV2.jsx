import { useEffect, useRef } from "react";
import "./style.scss";
function HomeV2() {
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
        data-speed="30"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-4"
        data-speed="40"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-5"
        data-speed="52"
      ></div>
      <div
        className="keyart_layer parallax"
        id="keyart-6"
        data-speed="64"
      ></div>
      {/* <div className="keyart_layer" id="keyart-scrim"></div> */}
      <div
        className="keyart_layer parallax"
        id="keyart-7"
        data-speed="78"
      ></div>
      {/* <div className="keyart_layer" id="keyart-8" data-speed="100"></div> */}
      <img id="rockBoundary" src="/img/bg_10.png" alt="rock" />
    </div>
  );
}
export default HomeV2;
