import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import classes from "./dashboard.module.scss";
import Plot from "react-plotly.js";

import SymbolSearch from "../../components/symbolSearch/symbolSearch";

const Dashboard = () => {
  const [values, setPairs] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=EUR&to_symbol=USD&interval=15min&outputsize=full&apikey=YZM28XRYBFZD6K0T`
      )
      .then((res) => {
        const dates = Object.keys(res.data["Time Series FX (15min)"]);
        const fetchedPairs = JSON.stringify(dates);
        setPairs(fetchedPairs);
      });
  }, []);

  return <div className={classes.container}></div>;
};

export default Dashboard;
