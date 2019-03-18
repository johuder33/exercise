export const getUsers = (limit = 20) => {
  return new Promise((resolve, reject) => {
    fetch(`https://randomuser.me/api/?results=${limit}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(resolve)
      .catch(reject);
  });
};
