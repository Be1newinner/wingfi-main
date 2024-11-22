/** @format */

export const selectCorporateUser = (state) => ({
  data: state.users.data,
  error: state.users.error,
  loading: state.users.loading,
});

export const selectRetailUser = (state) => ({
  data: state.users.data,
  error: state.users.error,
  loading: state.users.loading,
});

export const selectVendorUser = (state) => ({
  data: state.users.data,
  error: state.users.error,
  loading: state.users.loading,
});
