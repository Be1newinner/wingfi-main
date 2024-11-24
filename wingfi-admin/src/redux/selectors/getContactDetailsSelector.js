export const selectGetContactDetails = (state) => ({
    data: state.getcontactdetails.data,
    loading: state.getcontactdetails.loading,
    error: state.getcontactdetails.error,
});