import { apiCall } from "./apiGateway";
import { API_METHOD } from "../utils/constant";
import { setLocalUser } from "../utils/user";

export function register(input) {}

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
