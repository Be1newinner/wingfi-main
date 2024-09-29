import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    loadAllOrdersRequest: (state, action) => {
      console.log("SAGA REQUEST => ", action.payload)
      state.loading = true;
    },
    loadAllOrdersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadAllOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadAllOrdersRequest, loadAllOrdersSuccess, loadAllOrdersFailure } = ordersSlice.actions;
export default ordersSlice.reducer;
