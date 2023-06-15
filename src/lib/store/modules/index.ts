import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import indicator from "./indicator";
import counter from "./counter";

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    counter,
    // indicator,
    // 여기에 추가
  })(state, action);
};

export default reducer;
