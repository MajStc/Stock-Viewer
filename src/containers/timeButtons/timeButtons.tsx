import TimeButton from "../../components/timeButton/timeButton";

const TimeButtons = () => {
  return (
    <div>
      <TimeButton time="1min" />
      <TimeButton time="5min" />
      <TimeButton time="15min" />
      <TimeButton time="30min" />
      <TimeButton time="60min" />
      <TimeButton time="1d" />
      <TimeButton time="1w" />
    </div>
  );
};

export default TimeButtons;
