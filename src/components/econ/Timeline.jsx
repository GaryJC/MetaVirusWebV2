import TimelineContainer from "./TimelineContainer";
import TrackVisibility from "react-on-screen";
import "./style.scss";
function TimeLine() {
  const content = [
    {
      time: "03/22-09/22",
      list: [
        "Token contract",
        "Cornerstone round",
        "VIRU exchange",
        "Seed round",
        "Demo",
        "First pre-sale",
      ],
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "10/22-12/22",
      list: [
        "Trailer Virul",
        "marketing",
        "Petri dish",
        "Second pre-sale",
        "Playable demo",
        "IDO",
      ],
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "01/23-01/24",
      list: [
        "Trailer Virul",
        "marketing",
        "Petri dish",
        "Second pre-sale",
        "Playable demo",
        "IDO",
      ],
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "2024 & beyond",
      list: [
        "Open the editor to encourage other game developers to join the MetaVirus game ecosystem.",
        "Launch online and offline interaction, and virtual reality interacts with reality.",
        "Introduce real-world brands and establish a link between gameplay and advertising that serves as a mechanism to encourage the community to be the main body of brand interaction and cooperation.",
        "Launch augmented reality (AR) technology that has been strengthened by expected technical advances in the industry.",
        "AR equipment can be launched in conjunction with equipment manufacturers or independently.",
      ],
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
  ];
  return (
    <div className="timeline">
      {content.map((item, index) => {
        return (
          <TrackVisibility key={index}>
            <TimelineContainer
              time={item.time}
              list={item.list}
              pos={
                (index + 1) % 2 === 0
                  ? "timelineContainer right"
                  : "timelineContainer left"
              }
            />
          </TrackVisibility>
        );
      })}
    </div>
  );
}

export default TimeLine;
