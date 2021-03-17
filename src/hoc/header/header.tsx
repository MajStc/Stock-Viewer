import classes from "./header.module.scss";
import SymbolSearch from "../../components/symbolSearch/symbolSearch";
import PlotButton from "../../components/plotButton/plotButton";
import TimeButtons from "../../containers/timeButtons/timeButtons";

const Header = (props: any) => {
  return (
    <div className={classes.header}>
      <SymbolSearch placeholder="From" />
      <SymbolSearch placeholder="To" />
      <PlotButton />
      <TimeButtons />
    </div>
  );
};

export default Header;
