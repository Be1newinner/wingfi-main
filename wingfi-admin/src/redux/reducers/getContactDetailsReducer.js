import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

export const getContactDetailsSlice = createSlice({
    name: "getcontactdetails",
    initialState,

    reducers: {
        getContactDetailsRequest: (state, action) => {
            state.loading = true;
        },

        getContactDetailsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },

        getContactDetailsFailed: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
    },
});

export const { getContactDetailsRequest, getContactDetailsSuccess, getContactDetailsFailed } = getContactDetailsSlice.actions;

export default getContactDetailsSlice.reducer;