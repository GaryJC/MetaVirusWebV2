import "./style.scss";
function TimelineContainer({ time, list, pos, isVisible }) {
  console.log(list, time, pos);
  const className = isVisible
    ? "content animate__animated animate__fadeIn"
    : "content animate__animated animate__fadeOut";
  return (
    <div className={pos}>
      <div className={className}>
        <h2>{time}</h2>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TimelineContainer;
