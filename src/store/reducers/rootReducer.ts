import { combineReducers } from "redux";

import forexSymbols from "./parts/forexSymbols";
import currencyPair from "./parts/currencyPair";

const rootReducer = combineReducers({
  forexSymbols,
  currencyPair,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
