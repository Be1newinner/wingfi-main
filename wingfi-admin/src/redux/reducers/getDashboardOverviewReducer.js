import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

const getDashboardOverviewSlice = createSlice({
    name: "getdashboardoverview",
    initialState,

    reducers: {
        getDashboardOverviewRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getDashboardOverviewSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getDashboardOverviewFailed: (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getDashboardOverviewRequest, getDashboardOverviewSuccess, getDashboardOverviewFailed } = getDashboardOverviewSlice.actions;
export default getDashboardOverviewSlice.reducer;