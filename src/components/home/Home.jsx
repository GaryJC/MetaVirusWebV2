import { ParallaxBanner } from "react-scroll-parallax";
// import "./home.scss";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/img/bg_13.png')",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        zIndex: -1,
        position: "relative",
      }}
    >
      <ParallaxBanner
        style={{
          height: "1200px",
          // position: "absolute",
          //   aspectRatio: "2 / 1",
        }}
        layers={[
          // {
          //   image: "/img/bg_3.png",
          // },
          // {
          //   image: "/img/bg_5.png",
          //   speed: -40,
          // },
          {
            image: "/img/bg_6.png",
            // speed: -35,
            translateY: [0, -10],
            // scale: [1, 1],
            shouldAlwaysCompleteAnimation: true,
            shouldDisableScalingTranslations: true,
          },
          {
            image: "/img/bg_7.png",
            // speed: -25,
            translateY: [0, -20],
            shouldAlwaysCompleteAnimation: true,
            shouldDisableScalingTranslations: true,
          },
          // {
          //   image: "/img/bg_4.png",
          // },
          {
            image: "/img/bg_12.png",
            translateY: [0, -50],
            shouldAlwaysCompleteAnimation: true,
            shouldDisableScalingTranslations: true,
          },
          // {
          //   image: "/img/bg_1.png",
          //   speed: -20,
          // },
          //   {
          //     image: "/img/bg_8.png",
          //     speed: -2,
          //   },
          //   {
          //     image: "/img/bg_2.png",
          //     speed: 0,
          //   },
          // {
          //   image: "/img/bg_10.png",
          // },
          // {
          //   speed: -30,
          //   children: (
          //     <div className="title">
          //       <h1>Meta Virus</h1>
          //     </div>
          //   ),
          // },

          // {
          //   image: "/img/bg_3.png",
          //   speed: -20,
          // },
        ]}
        // className="aspect-[2/1]"
      >
        {/* <div className="title">
        <h1>Hello World!</h1>
      </div> */}
      </ParallaxBanner>
      {/* <img id="rockBoundary" src="/img/bg_10.png" alt="rock" /> */}
    </div>
  );
};

export default Home;
