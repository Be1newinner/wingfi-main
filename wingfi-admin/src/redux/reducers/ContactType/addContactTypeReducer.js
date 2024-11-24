import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

export const addContactTypeSlice = createSlice({
    name: "addtype",
    initialState,

    reducers: {
        addContactTypeRequest: (state, action) => {

            state.loading = true;
            state.error = null;
        },
        addContactTypeSuccess: (state, action) => {

            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        addContactTypeFailed: (state, action) => {

            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { addContactTypeRequest, addContactTypeSuccess, addContactTypeFailed } = addContactTypeSlice.actions
export default addContactTypeSlice.reducer