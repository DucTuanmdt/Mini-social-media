import { USER_ACTION } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getFriendsOnlineApi,
  getPostByUserIdApi,
  getGeneralResourceApi,
  getUserApi,
} from "../../services/apiClient";

function* getFriendsOnline() {
  try {
    const response = yield call(getFriendsOnlineApi);
    yield put({
      type: USER_ACTION.GET_ONLINE_FRIENDS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: USER_ACTION.GET_ONLINE_FRIENDS_FAILED,
      payload: error.message,
    });
  }
}

function* getPostByUserId(action) {
  try {
    const response = yield call(getPostByUserIdApi, action.input);
    yield put({
      type: USER_ACTION.GET_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: USER_ACTION.GET_POST_FAILED,
      payload: error.message,
    });
  }
}

function* getShortcurt(action) {
  try {
    const response = yield call(getGeneralResourceApi, action.input);
    yield put({
      type: USER_ACTION.GET_SHORTCURT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: USER_ACTION.GET_SHORTCURT_FAILED,
      payload: error.message,
    });
  }
}

function* getProfileUser(action) {
  try {
    const response = yield call(getUserApi, action.input);

    yield put({
      type: USER_ACTION.GET_PROFILE_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: USER_ACTION.GET_PROFILE_FAILED,
      payload: error.message,
    });
  }
}

function* userSaga() {
  yield takeEvery(USER_ACTION.GET_ONLINE_FRIENDS_REQUESTED, getFriendsOnline);
  yield takeEvery(USER_ACTION.GET_POST_REQUESTED, getPostByUserId);
  yield takeEvery(USER_ACTION.GET_SHORTCURT_REQUESTED, getShortcurt);
  yield takeEvery(USER_ACTION.GET_PROFILE_REQUESTED, getProfileUser);
}

export default userSaga;
