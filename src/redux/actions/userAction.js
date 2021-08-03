import { USER_ACTION } from "../types";

export function getFriendsOnline(input) {
  return {
    type: USER_ACTION.GET_ONLINE_FRIENDS_REQUESTED,
    input,
  };
}

export function getPostByUserId(input) {
  return {
    type: USER_ACTION.GET_POST_REQUESTED,
    input,
  };
}

export function getShortcurt(input) {
  return {
    type: USER_ACTION.GET_SHORTCURT_REQUESTED,
    input,
  };
}

export function getProfileUser(input) {
  return {
    type: USER_ACTION.GET_PROFILE_REQUESTED,
    input,
  };
}
