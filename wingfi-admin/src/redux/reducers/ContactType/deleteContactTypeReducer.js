import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

export const deleteContactTypeSlice = createSlice({
    name: "deletetype",
    initialState,

    reducers: {
        deleteContactTypeRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteContactTypeSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        deleteContactTypeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { deleteContactTypeRequest, deleteContactTypeSuccess, deleteContactTypeFailure } = deleteContactTypeSlice.actions;
export default deleteContactTypeSlice.reducer