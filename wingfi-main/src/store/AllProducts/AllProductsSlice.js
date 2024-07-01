import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const AllProductsSlice = createSlice({
  name: "AllProducts",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = AllProductsSlice.actions;

export default AllProductsSlice.reducer;
