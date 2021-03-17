import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import classes from "./plot.module.scss";
import Plot from "react-plotly.js";

const DrawnPlot = () => {
  const currencyPair = useSelector((state: RootState) => state.currencyPair);
  const chartValues = useSelector((state: RootState) => state.chartValues);

  const { innerWidth, innerHeight } = window;

  return (
    <div className={classes.plot}>
      <Plot
        data={[
          {
            x: chartValues.xValues,
            close: chartValues.closeValues,
            decreasing: { line: { color: "red" } },
            high: chartValues.highValues,
            increasing: { line: { color: "green" } },
            line: { color: "rgba(31,119,180,1)" },
            low: chartValues.lowValues,
            open: chartValues.openValues,
            type: "candlestick",
          },
        ]}
        layout={{
          width: innerWidth * 0.8,
          height: innerHeight * 0.8,
          title: `From ${currencyPair.from} to ${currencyPair.to}`,
          dragmode: "zoom",
          showlegend: false,
          xaxis: {
            rangeslider: {
              visible: false,
            },
          },
          yaxis: {
            autorange: true,
          },
        }}
      />
    </div>
  );
};

export default DrawnPlot;
