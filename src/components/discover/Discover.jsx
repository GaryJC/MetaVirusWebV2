import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./data";
import "./style.scss";
import { useState } from "react";

export default function Discover() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { width, height, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { width: "15%", height: "20%", background: "hotpink" },
    to: {
      width: open ? "40%" : "15%",
      height: open ? "50%" : "15%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div style={{ width: "1000px", height: "600px", marginTop: "-20vh" }}>
      <div className="wrapper">
        <h2 style={{ width: "100%", textAlign: "center" }}>Free to Play!</h2>
        <animated.div
          style={{ ...rest, width: width, height: height }}
          className="disContainer"
          onClick={() => set((open) => !open)}
        >
          {/* <h2>Download</h2> */}
          {transition((style, item) => (
            <animated.div
              className="item"
              style={{ ...style, background: item.css }}
            />
          ))}
        </animated.div>
      </div>
    </div>
  );
}
