//______________________URL DATA_____________________//

export const UPDATE_TIME = "UPDATE_TIME";
export const UPDATE_FROM = "UPDATE_FROM";
export const UPDATE_TO = "UPDATE_TO";

export const insertFromValue = (url: string, value: string) => {
  const idx = url.indexOf("from") + 12;
  if (url[idx] !== "&") {
    url = url.substring(0, idx) + url.substr(idx + 3);
    console.log(url);
  }
  const newUrl = url.substr(0, idx) + value + url.substr(idx);
  return newUrl;
};

export const insertToValue = (url: string, value: string) => {
  const idx = url.indexOf("to") + 10;
  if (url[idx] !== "&") {
    url = url.substring(0, idx) + url.substr(idx + 3);
    console.log(url);
  }
  const newUrl = url.substr(0, idx) + value + url.substr(idx);
  return newUrl;
};

//______________________CURRENCY PAIR_____________________//

export const FROM = "FROM";
export const TO = "TO";

//______________________CHART VALUES_____________________//

export const UPDATE_DATA = "UPDATE_DATA";
