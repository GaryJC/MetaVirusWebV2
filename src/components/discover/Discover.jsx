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
    from: { width: "40%", height: "50%", background: "hotpink" },
    to: {
      width: open ? "80%" : "40%",
      height: open ? "80%" : "50%",
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
    <div style={{ width: "100%", height: "600px" }}>
      <div className="wrapper">
        <animated.div
          style={{ ...rest, width: width, height: height }}
          className="container"
          onClick={() => set((open) => !open)}
        >
          {/* <div
            className="textContent"
            style={open ? { display: "none" } : { display: "block" }}
          >
            <h2>Discover</h2>
            <p>
              Using token economy to create a decentralized and freely traded
              mobile pet game
            </p>
          </div> */}
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
