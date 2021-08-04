import { AUTHEN_ACTION } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserApi } from "../../services/apiClient";
import { loginApi, registerApi } from "../../services/authen";

import { setLocalUser, getLocalUser } from "../../utils/user";

function* register(action) {
  try {
    const response = yield call(registerApi, action.input);
    yield put({
      type: AUTHEN_ACTION.REGISTER_ACCOUNT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: AUTHEN_ACTION.REGISTER_ACCOUNT_FAILED,
      payload: error.message,
    });
  }
}

function* login(action) {
  try {
    const response = yield call(loginApi, action.input);
    yield put({
      type: AUTHEN_ACTION.MAKE_LOGIN_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: AUTHEN_ACTION.MAKE_LOGIN_FAILED,
      payload: error.message,
    });
  }
}

function* getCurrentUser() {
  try {
    // get user from localStorage then fetch and update from server
    const user = getLocalUser();
    if (!user) {
      throw new Error("User didn't login");
    }

    yield put({
      type: AUTHEN_ACTION.UPDATE_CURRENT_USER,
      payload: user,
    });

    const response = yield call(getUserApi, user.id);
    setLocalUser(response);

    yield put({
      type: AUTHEN_ACTION.GET_USER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: AUTHEN_ACTION.GET_USER_FAILED,
      payload: error.message,
    });
  }
}

function* authenSaga() {
  yield takeEvery(AUTHEN_ACTION.REGISTER_ACCOUNT_REQUESTED, register);
  yield takeEvery(AUTHEN_ACTION.MAKE_LOGIN_REQUESTED, login);
  yield takeEvery(AUTHEN_ACTION.GET_USER_REQUESTED, getCurrentUser);
}

export default authenSaga;
