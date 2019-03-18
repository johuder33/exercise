export const ADD_USERS = "ADD_USERS";
export const GET_USER = "GET_USER";
export const SET_LOADING = "SET_LOADING";

export const addUsers = users => ({
  type: ADD_USERS,
  payload: {
    users
  }
});

export const getUser = userId => ({
  type: GET_USER,
  payload: {
    userId
  }
});

export const setLoading = loading => ({
  type: SET_LOADING,
  payload: {
    loading
  }
});
