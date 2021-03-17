import apiKey from "../../../secret/api";

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
  FX: "function=FX_",
  url: `https://www.alphavantage.co/query?function=&from_symbol=&to_symbol=&apikey=${apiKey}`,
};

const urlData = (state: UrlData = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_TIME": {
      if (action.time.includes("min")) {
        const urlFX = "INTRADAY";
        const valueFX = "Intraday";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `https://www.alphavantage.co/query?function=FX_${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&interval=${action.time}&outputsize=full&apikey=${apiKey}`,
        };
      } else if (action.time.includes("d")) {
        const urlFX = "DAILY";
        const valueFX = "Daily";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `https://www.alphavantage.co/query?function=FX_${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&outputsize=full&apikey=${apiKey}`,
        };
      } else if (action.time.includes("w")) {
        const urlFX = "WEEKLY";
        const valueFX = "Weekly";
        return {
          ...state,
          time: action.time,
          FX: valueFX,
          url: `https://www.alphavantage.co/query?function=FX_${urlFX}&from_symbol=${state.from}&to_symbol=${state.to}&apikey=${apiKey}`,
        };
      }
      return { ...state };
    }
    case "UPDATE_FROM": {
      let copyUrl = state.url;
      const idx = copyUrl.indexOf("from") + 12;
      if (copyUrl[idx] !== "&") {
        copyUrl = copyUrl.substring(0, idx) + copyUrl.substr(idx + 3);
        console.log(copyUrl);
      }
      const newUrl =
        copyUrl.substr(0, idx) + action.value + copyUrl.substr(idx);
      return { ...state, from: action.value, url: newUrl };
    }
    case "UPDATE_TO": {
      let copyUrl = state.url;
      const idx = copyUrl.indexOf("to") + 10;
      if (copyUrl[idx] !== "&") {
        copyUrl = copyUrl.substring(0, idx) + copyUrl.substr(idx + 3);
        console.log(copyUrl);
      }
      const newUrl =
        copyUrl.substr(0, idx) + action.value + copyUrl.substr(idx);
      return { ...state, to: action.value, url: newUrl };
    }
    default:
      return state;
  }
};

export default urlData;
