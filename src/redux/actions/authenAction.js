import { AUTHEN_ACTION } from "../types";

export function login(input) {
  return {
    type: AUTHEN_ACTION.MAKE_LOGIN_REQUESTED,
    input,
  };
}

export function getCurrentUser(input) {
  return {
    type: AUTHEN_ACTION.GET_USER_REQUESTED,
    input,
  };
}
