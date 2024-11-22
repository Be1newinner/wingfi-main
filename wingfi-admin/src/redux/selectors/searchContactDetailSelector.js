export const selectSearchContactDetails = (state) => ({
    data: state.searchcontactdetails?.data,
    loading: state.searchcontactdetails.loading,
    error: state.searchcontactdetails.error,
})

// export const selectSearchContactDetails = (state) => {
//     console.log(state.searchcontactdetails);
//     return {
//         data: state.searchcontactdetails.data,
//         loading: state.searchcontactdetails.loading,
//         error: state.searchcontactdetails.error,
//     };
// };