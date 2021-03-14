import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";

import classes from "./symbolSearch.module.scss";

const SymbolSearch = (props: any) => {
  const dispatch = useDispatch();

  const symbols = useSelector((state: RootState) => state.forexSymbols);

  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [display, setDisplay] = useState(false);

  const searchForSymbol = (event: any) => {
    setSearchSymbol(event.target.value);
  };

  const changeDisplay = (cond: boolean) => {
    setDisplay(cond);
  };

  useEffect(() => {
    const results: string[] = symbols.filter((symbol) =>
      symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
    setSearchResults(results);
    if (searchSymbol === "") {
      setSearchResults([]);
      changeDisplay(false);
    } else {
      changeDisplay(true);
    }
  }, [searchSymbol, symbols]);

  let classForDiv;
  if (searchSymbol === "" || !display) {
    classForDiv = classes.hide;
  } else {
    classForDiv = classes.listContainer;
  }
  if (display) {
    document.addEventListener("click", (e: any) => {
      e.stopPropagation();
      if (e.target.id !== props.placeholder) {
        changeDisplay(false);
      }
    });
  }

  const pickSymbol = (event: any) => {
    setSearchSymbol(event.target.id);
    const type = props.placeholder.toUpperCase();
    dispatch({ type, value: event.target.id });
  };

  return (
    <div className={classes.formContainer}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={searchSymbol}
        onChange={searchForSymbol}
        onMouseDown={() => changeDisplay(true)}
        className={classes.inputField}
        id={props.placeholder}
      />
      <div className={classForDiv}>
        <ul className={classes.symbolsList}>
          {searchResults.map((result) => (
            <li key={result} id={result} onClick={pickSymbol}>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SymbolSearch;
