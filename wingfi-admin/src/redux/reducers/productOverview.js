import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productOverview from "../../offline/productOverview.json";

const initialState = {
  data: productOverview,
  productOverviewloading: false,
};

const productOverviewSlice = createSlice({
  name: "productOverview",
  initialState, 
  reducers: {
    productOverviewRequest: (state) => {
      state.productOverviewloading = true;
    },

    productOverviewSuccess: (state, action: PayloadAction<any>) => {
      state.productOverviewloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { productOverviewRequest, productOverviewSuccess } = productOverviewSlice.actions;
export default productOverviewSlice.reducer;
