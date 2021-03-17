import { useDispatch } from "react-redux";

const TimeButton = (props: any) => {
  const dispatch = useDispatch();

  const changeTime = (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TIME", time: e.target.value });
    console.log(e);
  };
  return (
    <button onClick={changeTime} value={props.time}>
      {props.time}
    </button>
  );
};

export default TimeButton;
