import classes from "./plotButton.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

const PlotButton = () => {
  const { from, to, time } = useSelector((state: RootState) => state.urlData);
  const urlData = useSelector((state: RootState) => state.urlData);
  const dispatch = useDispatch();

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
        console.log(data);
        const xValues: string[] = [];
        const closeValues: string[] = [];
        const highValues: string[] = [];
        const lowValues: string[] = [];
        const openValues: string[] = [];
        console.log(`Time Series FX (${urlData.time})`);
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

  let isActive: boolean;
  let button;
  isActive = to !== "" && from !== "" && time !== "";

  if (isActive) {
    button = (
      <button className={classes.plotButton} onClick={fetchData}>
        PLOT
      </button>
    );
  } else {
    button = (
      <button className={classes.plotButton} disabled>
        PLOT
      </button>
    );
  }

  return button;
};

export default PlotButton;
