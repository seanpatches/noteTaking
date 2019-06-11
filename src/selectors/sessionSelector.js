export const getToken = state => {
  console.log (state);
  return state.session.token;
};
