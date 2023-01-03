import TokenChart from "./TokenChart";
import LiquidityChart from "./LiquidityChart";
import "./style.scss";
function Chart() {
  return (
    <div style={{ display: "flex", flexBasis: "100%" }}>
      <TokenChart />
      <LiquidityChart />
    </div>
  );
}

export default Chart;
