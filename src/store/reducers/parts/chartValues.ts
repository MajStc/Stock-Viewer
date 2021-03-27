import { UPDATE_DATA } from "../functions";

interface ChartValues {
  closeValues: string[];
  openValues: string[];
  highValues: string[];
  lowValues: string[];
  xValues: string[];
}

const initialState = {
  closeValues: [],
  openValues: [],
  highValues: [],
  lowValues: [],
  xValues: [],
};

const chartValues = (state: ChartValues = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        ...state,
        closeValues: action.closeValues,
        openValues: action.openValues,
        highValues: action.highValues,
        lowValues: action.lowValues,
        xValues: action.xValues,
      };
    }
    default:
      return state;
  }
};

export default chartValues;
