import { apiCall } from "./apiGateway";
import { API_METHOD } from "../utils/constant";
import { setLocalUser } from "../utils/user";

export function registerApi(input) {
  return new Promise(function (resolve, reject) {
    apiCall({
      url: `/users`,
      method: API_METHOD.POST,
      data: input,
    })
      .then((response) => {
        if (response && response.id) {
          resolve(response);
        } else {
          reject("Can not create user because of some reason!");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function loginApi(input) {
  return new Promise(function (resolve, reject) {
    apiCall({
      url: `/users?email=${input.email}`,
      method: API_METHOD.GET,
      data: input,
    })
      .then((response) => {
        const user = response ? response[0] : null;
        if (user && user.password === input.password) {
          setLocalUser(user);
          resolve(user);
        } else {
          reject("Email or password is incorrect!");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
