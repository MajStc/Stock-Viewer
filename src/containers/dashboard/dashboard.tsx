import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import classes from "./dashboard.module.scss";
import DrawnPlot from "../plot/plot";
import Header from "../../hoc/header/header";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <DrawnPlot />
    </div>
  );
};

export default Dashboard;
