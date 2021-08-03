import Cookies from "js-cookie";
import { AUTHENTICATION } from "./constant";

export function getLocalUser(field) {
  let user = null;
  // logined
  if (Cookies.get(AUTHENTICATION.TOKEN)) {
    try {
      user = JSON.parse(localStorage.getItem(AUTHENTICATION.USER));
      return field ? user[field] : user;
    } catch (error) {
      console.error("Get user failed", error);
      return null;
    }
  }
  return null;
}

export function setLocalUser(user) {
  if (user && user.token) {
    Cookies.set(AUTHENTICATION.TOKEN, user.token);
    localStorage.setItem(AUTHENTICATION.USER, JSON.stringify(user));
  }
}

export function clearUser() {
  Cookies.remove(AUTHENTICATION.TOKEN);
  localStorage.removeItem(AUTHENTICATION.USER);
}
