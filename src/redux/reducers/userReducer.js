import { USER_ACTION } from "../types";

const initialState = {
  onlineFriends: [],
  shortCurts: [],
  profileUser: {},
  loading: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTION.GET_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case USER_ACTION.GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
      };
    case USER_ACTION.GET_ONLINE_FRIENDS_SUCCESS:
      return {
        ...state,
        onlineFriends: action.payload,
      };
    case USER_ACTION.GET_SHORTCURT_SUCCESS:
      return {
        ...state,
        shortCurts: action.payload,
      };
    case USER_ACTION.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default userReducer;
