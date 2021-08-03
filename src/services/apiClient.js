import { apiCall } from "./apiGateway";
import { API_METHOD } from "../utils/constant";

// // ! WARNING: Temporary logic because there are no BE server yet
// export function loginApi(id) {
//   return apiCall({ url: `/users/${id}`, method: API_METHOD.GET });
// }

export function getUserApi(id) {
  return apiCall({ url: `/users/${id}`, method: API_METHOD.GET });
}

export function getFriendsOnlineApi() {
  return apiCall({ url: `/users`, method: API_METHOD.GET });
}

export function getPostByUserIdApi(userId) {
  return apiCall({
    url: `/users/${userId}/articles?sortBy=id&order=desc`,
    method: API_METHOD.GET,
  });
}

export function getGeneralResourceApi() {
  return apiCall({ url: `/general`, method: API_METHOD.GET });
}

export function createPostApi(input) {
  return apiCall({
    url: `/users/${input.userId}/articles`,
    method: API_METHOD.POST,
    data: input,
  });
}

export function updatePostApi(input) {
  return apiCall({
    url: `/users/${input.userId}/articles/${input.id}`,
    method: API_METHOD.PUT,
    data: input,
  });
}

export function deletePostApi({ id, userId }) {
  return apiCall({
    url: `/users/${userId}/articles/${id}`,
    method: API_METHOD.DELETE,
    data: null,
  });
}
