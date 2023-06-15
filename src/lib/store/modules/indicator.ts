//initialStateType
interface initialStateType {
  indicator: number;
}

//initialState
const intialState = {
  indicator: 0,
};

const INDICATOR = "indicator";

export default function indicator(
  state: initialStateType = intialState,
  action: any
) {
  switch (action.type) {
    case INDICATOR:
      return {
        ...state,
        indicator: action.payload,
      };
  }
}
