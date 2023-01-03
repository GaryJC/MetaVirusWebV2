import "./App.css";
import Home from "./components/home/Home";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import Discover from "./components/discover/Discover";
import Card from "./components/card/Card";
import TimeLine from "./components/econ/Timeline";
import GameVideo from "./components/gameVideo/GameVideo";
import Chart from "./components/econ/Chart";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Home />

        <div
          style={{
            backgroundColor: "#331732",
            position: "relative",
            zIndex: 10,
            marginTop: -1,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            backgroundImage: `url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)`,
          }}
        >
          <Parallax
            translateY={[20, -20]}
            style={{
              backgroundImage: "url('space_bg_2.png')",
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              width: "100%",
              position: "absolute",
              // top: "10vh",
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 1200,
              // marginLeft: 40,
              // marginright: 40,
              zIndex: 1,
            }}
          />
          <GameVideo />

          <Card />
          <Discover />
          <h2
            style={{
              color: "white",
              fontSize: "2em",
              width: "100%",
              textAlign: "center",
            }}
          >
            Process
          </h2>

          <Parallax
            translateY={[30, -15]}
            // speed={-20}
            style={{
              backgroundImage: "url('space_bg_1.png')",
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              width: "100%",
              position: "absolute",
              top: "200vh",
              backgroundSize: "contain",
              // backgroundRepeat: "no-repeat",
              height: 2000,
              zIndex: -1,
            }}
          />

          <TimeLine />
          <Chart />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
