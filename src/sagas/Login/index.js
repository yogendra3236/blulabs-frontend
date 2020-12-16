import { call, put } from "redux-saga/effects";
import { loginActionResponse, loginActionFailure } from "../../actions/Login";

import { LOGIN_API } from "../../constants/api";
import query from "../../utils/query";

/* generator to fetch the login token
 and store in localStorage and redux-store
*/

function* userLoginSaga(action) {
  const url = LOGIN_API;
  const { body, history } = action.payload;

  try {
    const result = yield call(query, { url, method: "POST", body });
    const { token, name: profileName, key } = yield result.body;

    // setting the token in the localStorage
    if (token && token !== "null") {
      yield localStorage.setItem("token", token);
      yield localStorage.setItem("accessKey", key);

      yield history.push({
        pathname: "/dashboard",
        profileName,
      });

      const response = loginActionResponse({ token, key, profileName });
      yield put(response);
    } else {
      yield localStorage.clear();
      yield history.push("/login");

      const failure = loginActionFailure({ message: result.msg, ...result.body });
      yield put(failure);
    }
  } catch (err) {
    console.log(err);
  }
}

export default userLoginSaga;
