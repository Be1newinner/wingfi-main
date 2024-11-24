import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: null,
    loading: true,
};

const addContactDetailsSlice = createSlice({
    name: "addcontactdetails",
    initialState,

    reducers: {
        addContactDetailsRequest: (state, action) => {
            state.loading = true;
        },
        addContactDetailsSuccess: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        addContactDetailsFailed: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },
    },
});

export const {addContactDetailsRequest, addContactDetailsSuccess, addContactDetailsFailed } = addContactDetailsSlice.actions;
export default addContactDetailsSlice.reducer;