import axios from "axios";
import config from "../configs/api-config.json";
import { API_METHOD } from "../utils/constant";

export function apiCall(input = {}) {
  // in case need to call external api
  const url = input.external ? input.url : config.baseUrl + input.url;

  return new Promise(function (resolve, reject) {
    axios({
      method: input.method || API_METHOD.GET,
      url,
      data: input.data,
      headers: {
        "Content-Type": "application/json",
        ...input.headers,
      },
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
