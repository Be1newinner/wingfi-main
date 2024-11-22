export const getDashboardOverviewSelector = (state) => ({
    data: state.getdashboardoverview.data,
    loading: state.getdashboardoverview.loading,
    error: state.getdashboardoverview.error
})