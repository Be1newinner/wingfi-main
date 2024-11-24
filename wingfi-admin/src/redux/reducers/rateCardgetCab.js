import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

export const rateCardSlice = createSlice({
  name: "ratecard",
  initialState,

  reducers: {
    rateCardRequest: (state, action) => {
      state.loading = true;
    },

    rateCardSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    rateCardFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Exporting the actions
export const { rateCardRequest, rateCardSuccess, rateCardFailure } = rateCardSlice.actions;

export default rateCardSlice.reducer;
