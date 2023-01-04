import "./App.css";
import Home from "./components/home/Home";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Discover from "./components/discover/Discover";
import Card from "./components/card/Card";
import TimeLine from "./components/econ/Timeline";
import GameVideo from "./components/gameVideo/GameVideo";
import Chart from "./components/econ/Chart";
import FinanceTarget from "./components/econ/FinanceTarget";
import GameBasics from "./components/gameBasics/GameBasics";
import { Player } from "@lottiefiles/react-lottie-player";
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
          {/* <Parallax
            translateY={[30, -30]}
            style={{
              backgroundImage: "url('space_bg_2.png')",
              // backgroundColor: "rgba(255, 0, 0, 0.3)",
              width: "100%",
              position: "absolute",
              top: "100vh",
              backgroundSize: "90%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: 1200,
              zIndex: 1,
            }}
          /> */}
          <GameVideo />
          <GameBasics />
          <Player
            id="astronot"
            autoplay
            loop
            src="https://lottie.host/d3ccf532-de0b-4a87-b2ec-195c35f8c2c6/wli3WE6OXi.json"
          ></Player>
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
              width: "100%",
              position: "absolute",
              top: "200vh",
              backgroundSize: "100%",
              height: 2000,
              zIndex: -1,
            }}
          />
          <TimeLine />
          <Parallax translateY={[80, -100]}>
            <Player
              id="rocket"
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_evrce8mt.json"
            ></Player>
          </Parallax>

          <Chart />
          <FinanceTarget />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
