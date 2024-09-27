import { createSlice } from "@reduxjs/toolkit";
import revenue from "../../offline/revenueData.json";

const initialState = {
  data: revenue,
  revenueloading: false,
};

const revenueSlice = createSlice({
  name: "revenue",
  initialState, 
  reducers: {
    revenueRequest: (state) => {
      state.revenueloading = true;
    },

    revenueSuccess: (state, action) => {
      state.revenueloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { revenueRequest, revenueSuccess } = revenueSlice.actions;
export default revenueSlice.reducer;
