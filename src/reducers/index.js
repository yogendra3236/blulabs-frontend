import { combineReducers } from "redux";
import Global from "./Global";
import Locations from "./Locations";

import { APP_LOGOUT } from "../actions/index";

const appReducer = combineReducers({
  Global,
  Locations,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === APP_LOGOUT) {
    newState = undefined;
  }
  return appReducer(newState, action);
};

export default rootReducer;
