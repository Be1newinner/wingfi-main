import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import product from "../../offline/topProductList.json";

const initialState = {
  data: product,
  productloading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState, 
  reducers: {
    productRequest: (state) => {
      state.productloading = true;
    },

    productSuccess: (state, action: PayloadAction<any>) => {
      state.productloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { productRequest, productSuccess } = productSlice.actions;
export default productSlice.reducer;
