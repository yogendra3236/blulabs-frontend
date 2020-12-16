import {
  APP_LOGIN_REQUEST,
  APP_LOGIN_RESPONSE,
  APP_LOGIN_FAILURE,
} from "../../actions";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: false,
  token: null,
  key: null,
  profileName: "",
};

const setRequest = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const setResponse = (state, action) => {
  const { token, key, profileName } = action.payload;
  return {
    ...state,
    isLoggedIn: true,
    loading: false,
    token,
    key,
    profileName,
  };
};

const setFailure = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    token: null,
    key: null,
    profileName: "",
  };
};

const Global = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOGIN_REQUEST:
      return setRequest(state, action);

    case APP_LOGIN_RESPONSE:
      return setResponse(state, action);

    case APP_LOGIN_FAILURE:
      return setFailure(state, action);

    default:
      return state;
  }
};

export default Global;
