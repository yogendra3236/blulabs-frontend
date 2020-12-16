import { call, put } from "redux-saga/effects";
import {
  getLocationsResponse,
  getLocationsFailure,
} from "../../actions/GetLocations";

import { GET_LOCATIONS } from "../../constants/api";
import query from "../../utils/query";

/* generator to fetch the nearest-locations 
   and show them to the user
*/

function* getLocationSaga(action) {
  const url = GET_LOCATIONS;
  const { latitude, longitude } = action.payload;
  const body = { latitude, longitude };

  try {
    const result = yield call(query, { url, method: "POST", body });
    if (!result.error) {
      const { pumps = [] } = yield result.body;
      const totalPumps = pumps?.length;

      const response = getLocationsResponse({ pumps, totalPumps });
      yield put(response);
      return;
    }
    const failure = getLocationsFailure(result.body);
    yield put(failure);
  } catch (err) {
    console.log(err);
  }
}

export default getLocationSaga;
