/** @format */

export const selectAuth = (state) => ({
  email: state.auth.email,
  role: state.auth.role,
  loading: state.auth.loading,
  error: state.auth.error,
  token: state.auth.token,
  logout: state.auth.logout,
});
