import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: false,
  currentPage: 0,
  itemsPerPage: 10,
};

export const getLogSlice = createSlice({
  name: "getlog",
  initialState,

  reducers: {
    getLogRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.itemsPerPage = action.payload.limit;
    },

    getLogSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    getLogFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getLogRequest, getLogSuccess, getLogFailure } = getLogSlice.actions;
export default getLogSlice.reducer;
