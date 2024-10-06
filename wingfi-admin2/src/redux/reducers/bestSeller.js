import { createSlice } from "@reduxjs/toolkit";
import bestSeller from "../../offline/BestShopSellerList.json";

const initialState = {
  data: bestSeller,
  bestSellerloading: false,
};

const bestSellerSlice = createSlice({
  name: "bestSeller",
  initialState,
  reducers: {
    bestSellerRequest: (state) => {
      state.bestSellerloading = true;
    },

    bestSellerSuccess: (state, action) => {
      state.bestSellerloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { bestSellerRequest, bestSellerSuccess } = bestSellerSlice.actions;
export default bestSellerSlice.reducer;
