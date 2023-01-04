import "./style.scss";
function GameBasics() {
  return (
    <div className="hexContainer">
      <ol className="even">
        <li className="hex"></li>
        <li className="hex"></li>
      </ol>
      <ol className="odd">
        <li className="hex"></li>
        <li className="hex"></li>
        <li className="hex"></li>
      </ol>
      <ol className="even">
        <li className="hex"></li>
        <li className="hex"></li>
      </ol>
    </div>
  );
}

export default GameBasics;
