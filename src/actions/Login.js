import {
  APP_LOGIN_FAILURE,
  APP_LOGIN_REQUEST,
  APP_LOGIN_RESPONSE,
} from "./index";

export const loginActionRequest = (payload) => ({
  type: APP_LOGIN_REQUEST,
  payload,
});

export const loginActionResponse = (payload) => ({
  type: APP_LOGIN_RESPONSE,
  payload,
});

export const loginActionFailure = (payload) => ({
  type: APP_LOGIN_FAILURE,
  payload,
});
