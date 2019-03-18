import { LOG_IN, LOG_OUT } from "./actions";

export const initialState = {
  logged: false
};

const handlers = {
  [LOG_OUT]: state => ({ ...state, logged: false }),
  [LOG_IN]: state => ({ ...state, logged: true }),
  __UNKNOWN__: state => state
};

export const AuthReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.__UNKNOWN__;
  return handler(state, action);
};
