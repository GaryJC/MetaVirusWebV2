import "./App.css";
import Home from "./components/home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import Discover from "./components/discover/Discover";
import Card from "./components/card/Card";
import TimeLine from "./components/econ/Timeline";
import TokenChart from "./components/econ/TokenChart";
import LiquidityChart from "./components/econ/LiquidityChart";
import GameVideo from "./components/gameVideo/GameVideo";
import ParallaxPage from "./components/parallax/ParallaxPage";
import Chart from "./components/econ/Chart";
function App() {
  return (
    // <ParallaxProvider>
    //   <Home />
    //   {/* <div style={{ height: 1000, backgroundColor: "#331732" }} /> */}
    //   <div style={{ height: 1000 }} />
    // </ParallaxProvider>
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
          }}
        >
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

          <TimeLine />
          {/* <TokenChart />
          <LiquidityChart /> */}
          <Chart />
        </div>
      </ParallaxProvider>
    </>
  );
}

export default App;
