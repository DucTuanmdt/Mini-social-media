import { POST_ACTION } from "../types";

export function createPost(input) {
  return {
    type: POST_ACTION.CREATE_POST_REQUESTED,
    input,
  };
}

export function deletePost(input) {
  return {
    type: POST_ACTION.DELETE_POST_REQUESTED,
    input,
  };
}

export function updatePost(input) {
  return {
    type: POST_ACTION.UPDATE_POST_REQUESTED,
    input,
  };
}

export function loadMorePost(input) {
  return {
    type: POST_ACTION.LOAD_MORE_POST_REQUESTED,
    input,
  };
}
