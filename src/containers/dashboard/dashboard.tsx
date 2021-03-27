import classes from "./dashboard.module.scss";
import DrawnPlot from "../plot/plot";
import Header from "../../hoc/header/header";

const Dashboard = () => {
  return (
    <div className={classes.container}>
      <Header />
      <DrawnPlot />
    </div>
  );
};

export default Dashboard;
