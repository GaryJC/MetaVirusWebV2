import TokenChart from "./TokenChart";
import LiquidityChart from "./LiquidityChart";
import "./style.scss";
function Chart() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "15vh",
        flexWrap: "wrap",
      }}
    >
      <TokenChart />
      <LiquidityChart />
    </div>
  );
}

export default Chart;
