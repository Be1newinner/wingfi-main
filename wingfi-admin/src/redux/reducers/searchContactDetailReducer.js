import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: false,  // Set loading to false initially
};

export const searchContactDetailSlice = createSlice({
  name: "searchcontactdetails",
  initialState,

  reducers: {
    searchContactDetailRequest: (state, action) => {

      state.data = [];
      state.error = null;
      state.loading = true;
    },

    searchContactDetailSuccess: (state, action) => {

      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },

    searchContactDetailFailure: (state, action) => {

      state.error = action.payload;
      state.loading = false;
    },

    resetSearchContactDetails: (state) => {
      return initialState; // Reset to initial state
    },
  },
});

export const { searchContactDetailRequest, searchContactDetailSuccess, searchContactDetailFailure, resetSearchContactDetails } = searchContactDetailSlice.actions;

export default searchContactDetailSlice.reducer;
