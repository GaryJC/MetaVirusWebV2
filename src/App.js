import "./App.css";
import Home from "./components/home/Home";
import { ParallaxProvider } from "react-scroll-parallax";
import HomeV2 from "./components/home/HomeV2";
function App() {
  return (
    // <ParallaxProvider>
    //   <Home />
    //   {/* <div style={{ height: 1000, backgroundColor: "#331732" }} /> */}
    //   <div style={{ height: 1000 }} />
    // </ParallaxProvider>
    <>
      <HomeV2 />
      <div
        style={{
          height: "3000px",
          backgroundColor: "#331732",
          position: "relative",
          zIndex: 10,
          // top: 0,
          marginTop: 75,
        }}
      />
      <div style={{ height: 1000 }} />
    </>
  );
}

export default App;
