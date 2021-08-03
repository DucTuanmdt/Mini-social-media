import { combineReducers } from "redux";

import userReducer from "./userReducer";
import authenReducer from "./authenReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  users: userReducer,
  authen: authenReducer,
  post: postReducer,
});

export default rootReducer;
