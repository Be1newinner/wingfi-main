import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadAllProductsRequest: (state, action) => {
      console.log("SAGA REQUEST => ", action.payload)
      state.loading = true;
    },
    loadAllProductsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadAllProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadAllProductsRequest, loadAllProductsSuccess, loadAllProductsFailure } = productsSlice.actions;
export default productsSlice.reducer;
