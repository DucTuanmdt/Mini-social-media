import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import authenSaga from "./authenSaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield all([userSaga(), authenSaga(), postSaga()]);
}
