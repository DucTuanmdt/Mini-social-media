import { AUTHEN_ACTION } from "../types";

const initialState = {
  currentUser: {},
  loading: false,
};

function authenReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHEN_ACTION.MAKE_LOGIN_REQUESTED:
    case AUTHEN_ACTION.GET_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case AUTHEN_ACTION.MAKE_LOGIN_FAILED:
    case AUTHEN_ACTION.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
      };

    case AUTHEN_ACTION.MAKE_LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    case AUTHEN_ACTION.GET_USER_SUCCESS:
    case AUTHEN_ACTION.UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default authenReducer;
