import { POST_ACTION, USER_ACTION } from "../types";

const initialState = {
  listPost: [],
  loading: false,
  error: null,
};

function postReducer(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case POST_ACTION.CREATE_POST_REQUESTED:
    case POST_ACTION.UPDATE_POST_REQUESTED:
    case POST_ACTION.DELETE_POST_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case POST_ACTION.CREATE_POST_FAILED:
    case POST_ACTION.UPDATE_POST_FAILED:
    case POST_ACTION.DELETE_POST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case USER_ACTION.GET_POST_SUCCESS:
      return {
        ...state,
        listPost: payload,
      };

    case POST_ACTION.LOAD_MORE_POST_SUCCESS:
      return {
        ...state,
        listPost: [...state.listPost, ...payload],
      };

    case POST_ACTION.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        listPost: [payload, ...state.listPost],
      };

    case POST_ACTION.DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        listPost: state.listPost.filter(({ id }) => id !== payload.id),
      };

    case POST_ACTION.UPDATE_POST_SUCCESS:
      const listCopy = [...state.listPost];
      const oldIndex = listCopy.findIndex(({ id }) => id === payload.id);
      listCopy[oldIndex] = payload;
      return {
        ...state,
        loading: false,
        listPost: listCopy,
      };

    default:
      return state;
  }
}

export default postReducer;
