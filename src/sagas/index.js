import { all, takeLatest } from "redux-saga/effects";
import { APP_LOGIN_REQUEST, APP_GET_LOCATIONS_REQUEST } from "../actions";

import userLoginSaga from "./Login/index";
import getLocationSaga from "./GetLocations";

function* actionWatcher() {
  yield takeLatest(APP_LOGIN_REQUEST, userLoginSaga);
  yield takeLatest(APP_GET_LOCATIONS_REQUEST, getLocationSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
