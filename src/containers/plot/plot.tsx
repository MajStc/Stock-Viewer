import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import classes from "./plot.module.scss";
import Plot from "react-plotly.js";

const DrawnPlot = () => {
  const currencyPair = useSelector((state: RootState) => state.currencyPair);
  const chartValues = useSelector((state: RootState) => state.chartValues);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${currencyPair.from}&to_symbol=${currencyPair.to}&apikey=`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const xValues: string[] = [];
          const closeValues: string[] = [];
          const highValues: string[] = [];
          const lowValues: string[] = [];
          const openValues: string[] = [];
          for (let key in data["Time Series FX (Daily)"]) {
            xValues.push(key);
            closeValues.push(data["Time Series FX (Daily)"][key]["4. close"]);
            openValues.push(data["Time Series FX (Daily)"][key]["1. open"]);
            highValues.push(data["Time Series FX (Daily)"][key]["2. high"]);
            lowValues.push(data["Time Series FX (Daily)"][key]["3. low"]);
          }
          dispatch({
            type: "UPDATE_DATA",
            xValues,
            closeValues,
            highValues,
            lowValues,
            openValues,
          });
        });
    };
    if (currencyPair.from !== "" && currencyPair.to !== "") {
      fetchData();
    }
  }, [currencyPair]);

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
          width: 720,
          height: 440,
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
