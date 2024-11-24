export const selectGetLog = (state) => ({
  data: state.getlog.data,
  loading: state.getlog.loading,
  error: state.getlog.error,
});
