import { combineReducers } from "redux";

import forexSymbols from "./parts/forexSymbols";
import currencyPair from "./parts/currencyPair";
import chartValues from "./parts/chartValues";

const rootReducer = combineReducers({
  forexSymbols,
  currencyPair,
  chartValues,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
