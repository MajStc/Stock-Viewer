import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import classes from "./timeButton.module.scss";
import { RootState } from "../../store/reducers/rootReducer";

const TimeButton = (props: any) => {
  const dispatch = useDispatch();
  const { time } = useSelector((state: RootState) => state.urlData);

  const changeTime = (e: any) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TIME", time: e.target.value });
  };

  return (
    <button
      onClick={changeTime}
      value={props.time}
      className={classes.timeButton}
      id={props.time}
      disabled={time === props.time}
    >
      {props.time}
    </button>
  );
};

export default TimeButton;
