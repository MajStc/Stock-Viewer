import { FROM, TO } from "../functions";

interface Pairs {
  from: string;
  to: string;
}

const initialState = {
  from: "",
  to: "",
};

const currencyPair = (state: Pairs = initialState, action: any) => {
  switch (action.type) {
    case FROM: {
      return { ...state, from: action.value };
    }
    case TO: {
      return { ...state, to: action.value };
    }
    default:
      return state;
  }
};

export default currencyPair;
