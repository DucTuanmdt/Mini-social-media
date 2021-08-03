import { POST_ACTION } from "../types";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  createPostApi,
  deletePostApi,
  updatePostApi,
  getPostByUserIdApi,
} from "../../services/apiClient";

function* createPost(action) {
  try {
    const response = yield call(createPostApi, action.input);

    if (!response.id) {
      throw new Error("Can not create post");
    }

    yield put({
      type: POST_ACTION.CREATE_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: POST_ACTION.CREATE_POST_FAILED,
      payload: error.message,
    });
  }
}

function* deletePost(action) {
  try {
    const response = yield call(deletePostApi, action.input);

    if (!response.id) {
      throw new Error("Can not delete post");
    }

    yield put({
      type: POST_ACTION.DELETE_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: POST_ACTION.DELETE_POST_FAILED,
      payload: error.message,
    });
  }
}

function* updatePost(action) {
  try {
    const response = yield call(updatePostApi, action.input);

    if (!response.id) {
      throw new Error("Can not update post");
    }

    yield put({
      type: POST_ACTION.UPDATE_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: POST_ACTION.UPDATE_POST_FAILED,
      payload: error.message,
    });
  }
}

// ! Temporary logic to load more posts
function* loadMorePost(action) {
  try {
    const { listUser, pageSize, remainUser } = action.input;
    for (let i = remainUser; i > remainUser - pageSize && i >= 0; i--) {
      const response = yield call(getPostByUserIdApi, listUser[i].id);

      yield put({
        type: POST_ACTION.LOAD_MORE_POST_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    yield put({
      type: POST_ACTION.LOAD_MORE_POST_FAILED,
      payload: error.message,
    });
  }
}

function* postSage() {
  yield takeEvery(POST_ACTION.CREATE_POST_REQUESTED, createPost);
  yield takeEvery(POST_ACTION.DELETE_POST_REQUESTED, deletePost);
  yield takeEvery(POST_ACTION.UPDATE_POST_REQUESTED, updatePost);
  yield takeEvery(POST_ACTION.LOAD_MORE_POST_REQUESTED, loadMorePost);
}

export default postSage;
