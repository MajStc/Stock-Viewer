import { combineReducers } from "redux";

import forexSymbols from "./parts/forexSymbols";

const rootReducer = combineReducers({
  forexSymbols,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
