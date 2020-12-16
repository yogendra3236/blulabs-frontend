import {
  APP_GET_LOCATIONS_REQUEST,
  APP_GET_LOCATIONS_RESPONSE,
  APP_GET_LOCATIONS_FAILURE,
} from "../../actions";

const initialState = {
  loading: false,
  error: false,
  pumps: [],
  totalPumps: 0,
};

const setRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const setResponse = (state, action) => {
  const { pumps = [], totalPumps = 0 } = action.payload;
  return {
    ...state,
    loading: false,
    pumps,
    totalPumps,
  };
};

const setFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    pumps: [],
    totalPumps: 0,
  };
};

const Global = (state = initialState, action) => {
  switch (action.type) {
    case APP_GET_LOCATIONS_REQUEST:
      return setRequest(state, action);

    case APP_GET_LOCATIONS_RESPONSE:
      return setResponse(state, action);

    case APP_GET_LOCATIONS_FAILURE:
      return setFailure(state, action);

    default:
      return state;
  }
};

export default Global;
