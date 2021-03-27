import TimeButton from "../../components/timeButton/timeButton";
import { useState } from "react";

const TimeButtons = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <TimeButton time="1min" />
      <TimeButton time="5min" />
      <TimeButton time="15min" />
      <TimeButton time="30min" />
      <TimeButton time="60min" />
      <TimeButton time="1d" />
      <TimeButton
        time="1w"
        isDisabled={disabled}
        onClick={() => setDisabled(!disabled)}
      />
    </div>
  );
};

export default TimeButtons;
