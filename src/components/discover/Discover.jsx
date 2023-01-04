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
    <div style={{ width: "1000px", height: "500px", marginTop: "-10rem" }}>
      <div className="wrapper">
        <animated.div
          style={{ ...rest, width: width, height: height }}
          className="disContainer"
          onClick={() => set((open) => !open)}
        >
          {transition((style, item) => (
            <animated.div
              className="item"
              style={{ ...style, background: item.css }}
            />
          ))}
          <div
            style={
              open
                ? { display: "none", position: "absolute" }
                : {
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    position: "absolute",
                  }
            }
          >
            Download
          </div>
        </animated.div>
      </div>
    </div>
  );
}
