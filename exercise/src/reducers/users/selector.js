export const getUsers = ({ users: { ids, byIds } }) => ids.map(id => byIds[id]);
export const getUser = id => ({ users: { byIds } }) => byIds[id];
export const isLoading = ({ users: { loading } }) => loading;
