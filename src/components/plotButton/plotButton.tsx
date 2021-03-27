import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../store/reducers/rootReducer";

import classes from "./plotButton.module.scss";

const PlotButton = () => {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);

  const { from, to, time } = useSelector((state: RootState) => state.urlData);
  const urlData = useSelector((state: RootState) => state.urlData);

  const urlTime = urlData.time.includes("min")
    ? urlData.time
    : urlData.time.includes("d")
    ? "Daily"
    : "Weekly";

  const fetchData = async () => {
    const url = urlData.url;
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const xValues: string[] = [];
        const closeValues: string[] = [];
        const highValues: string[] = [];
        const lowValues: string[] = [];
        const openValues: string[] = [];

        for (let key in data[`Time Series FX (${urlTime})`]) {
          xValues.push(key);
          closeValues.push(
            data[`Time Series FX (${urlTime})`][key]["4. close"]
          );
          openValues.push(data[`Time Series FX (${urlTime})`][key]["1. open"]);
          highValues.push(data[`Time Series FX (${urlTime})`][key]["2. high"]);
          lowValues.push(data[`Time Series FX (${urlTime})`][key]["3. low"]);
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

  useEffect(() => {
    if (to !== "" && from !== "" && time !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [from, to, time]);

  return (
    <button
      className={classes.plotButton}
      onClick={fetchData}
      disabled={!isActive}
    >
      PLOT
    </button>
  );
};

export default PlotButton;
