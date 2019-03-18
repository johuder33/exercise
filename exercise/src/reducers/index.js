import { combineReducers } from "redux";
import { AuthReducer } from "./auth";
import { UsersReducer } from "./users";

export default combineReducers({
  app: AuthReducer,
  users: UsersReducer
});
