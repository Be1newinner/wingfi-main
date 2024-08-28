import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import order from "../../offline/OrdersList.json";

const initialState = {
  data: order,
  orderloading: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState, 
  reducers: {
    orderRequest: (state) => {
      state.orderloading = true;
    },

    orderSuccess: (state, action: PayloadAction<any>) => {
      state.orderloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { orderRequest, orderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
