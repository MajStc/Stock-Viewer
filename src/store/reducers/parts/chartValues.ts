interface ChartValues {
  xValues: string[];
  closeValues: string[];
  openValues: string[];
  highValues: string[];
  lowValues: string[];
}

const initialState = {
  xValues: [],
  closeValues: [],
  openValues: [],
  highValues: [],
  lowValues: [],
};

const chartValues = (state: ChartValues = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_DATA": {
      return {
        ...state,
        xValues: action.xValues,
        closeValues: action.closeValues,
        openValues: action.openValues,
        highValues: action.highValues,
        lowValues: action.lowValues,
      };
    }
    default:
      return state;
  }
};

export default chartValues;
