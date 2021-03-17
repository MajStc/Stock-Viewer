import { combineReducers } from "redux";

import forexSymbols from "./parts/forexSymbols";
import currencyPair from "./parts/currencyPair";
import chartValues from "./parts/chartValues";
import urlData from "./parts/urlData";

const rootReducer = combineReducers({
  forexSymbols,
  currencyPair,
  chartValues,
  urlData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
