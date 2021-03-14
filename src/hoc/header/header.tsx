import classes from "./header.module.scss";
import SymbolSearch from "../../components/symbolSearch/symbolSearch";
import PlotButton from "../../components/plotButton/plotButton";

const Header = (props: any) => {
  return (
    <div className={classes.header}>
      <SymbolSearch placeholder="From" />
      <SymbolSearch placeholder="To" />
      <PlotButton />
    </div>
  );
};

export default Header;
