import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import classes from "./dashboard.module.scss";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

const Dashboard = () => {
  const [values, setPairs] = useState("");

  const [...symbols] = useSelector((state: RootState) => state.forexSymbols);

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=15min&outputsize=full&apikey=`
      )
      .then((res) => {
        const dates = Object.keys(res.data["Time Series FX (15min)"]);
        const fetchedPairs = JSON.stringify(dates);
        setPairs(fetchedPairs);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 720, height: 480, title: "A Fancy Plot" }}
      />
      <ul>
        {symbols.map((symbol) => (
          <li key={symbol}>{symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
