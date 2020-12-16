import {
  APP_GET_LOCATIONS_REQUEST,
  APP_GET_LOCATIONS_RESPONSE,
  APP_GET_LOCATIONS_FAILURE,
} from "./index";

export const getLocationsRequest = (payload) => ({
  type: APP_GET_LOCATIONS_REQUEST,
  payload,
});

export const getLocationsResponse = (payload) => ({
  type: APP_GET_LOCATIONS_RESPONSE,
  payload,
});

export const getLocationsFailure = (payload) => ({
  type: APP_GET_LOCATIONS_FAILURE,
  payload,
});
