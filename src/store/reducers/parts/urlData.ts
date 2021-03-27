import apiKey from "../../../secret/api";
import {
  UPDATE_FROM,
  UPDATE_TIME,
  UPDATE_TO,
  insertFromValue,
  insertToValue,
} from "../functions";

interface UrlData {
  url: string;
  from: string;
  to: string;
  time: string;
  FX: string;
}

const initialState = {
  from: "",
  to: "",
  time: "",
  FX: "",
  url: "",
};

const base = "https://www.alphavantage.co/query?function=FX_";

const urlData = (state: UrlData = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_TIME: {
      if (action.time.includes("min")) {
        const urlFX = "INTRADAY";
        const valueFX = "Intraday";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `${base}${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&interval=${action.time}&outputsize=full&apikey=${apiKey}`,
        };
      } else if (action.time.includes("d")) {
        const urlFX = "DAILY";
        const valueFX = "Daily";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `${base}${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&outputsize=full&apikey=${apiKey}`,
        };
      } else if (action.time.includes("w")) {
        const urlFX = "WEEKLY";
        const valueFX = "Weekly";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `${base}${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&apikey=${apiKey}`,
        };
      }
      return { ...state };
    }
    case UPDATE_FROM: {
      let copyUrl = state.url;

      const newUrl = insertFromValue(copyUrl, action.value);

      return { ...state, from: action.value, url: newUrl };
    }
    case UPDATE_TO: {
      let copyUrl = state.url;

      const newUrl = insertToValue(copyUrl, action.value);

      return { ...state, to: action.value, url: newUrl };
    }
    default:
      return state;
  }
};

export default urlData;
