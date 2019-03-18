import { ADD_USERS, SET_LOADING } from "./actions";

export const initialState = {
  loading: false,
  ids: [],
  byIds: {}
};

const handlers = {
  [ADD_USERS]: (state, { payload: { users } }) => {
    const nextState = users.reduce(
      (memo, user) => {
        const {
          login: { uuid }
        } = user;
        memo.ids.push(uuid);
        memo.byIds[uuid] = user;
        return memo;
      },
      { ids: [], byIds: {} }
    );
    return { ...state, ...nextState };
  },
  [SET_LOADING]: (state, { payload: { loading } }) => {
    return { ...state, loading };
  },
  __UNKNOWN__: state => state
};

export const UsersReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.__UNKNOWN__;
  return handler(state, action);
};
