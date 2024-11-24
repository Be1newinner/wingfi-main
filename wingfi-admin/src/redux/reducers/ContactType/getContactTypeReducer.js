import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

export const getContactTypeSlice = createSlice({
    name: "getcontacttype",
    initialState,

    reducers: {
        getContactTypeRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getContactTypeSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getContactTypeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { getContactTypeRequest, getContactTypeSuccess, getContactTypeFailure } = getContactTypeSlice.actions
export default getContactTypeSlice.reducer