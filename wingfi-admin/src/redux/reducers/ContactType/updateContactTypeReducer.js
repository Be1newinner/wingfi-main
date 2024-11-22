import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

export const updateContactTypeSlice = createSlice({
    name: "updatetype",
    initialState,

    reducers: {
        updateContactTypeRequest: (state) => {
            state.loading = true;
            state.error = null;
        },

        updateContactTypeSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },

        updateContactTypeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { updateContactTypeRequest, updateContactTypeSuccess, updateContactTypeFailure } = updateContactTypeSlice.actions
export default updateContactTypeSlice.reducer