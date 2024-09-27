import { createSlice } from "@reduxjs/toolkit";
// import { Order } from "../constants/order";

// interface OrderState {
//   orders: Order[];
//   loading: boolean;
//   error: string | null;
//   success: boolean;
//   latestOrderID: string | null;
// }

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    loadAllOrdersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loadAllOrdersSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    loadAllOrdersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    loadSingleOrderRequest(
      state,
      action
    ) {
      console.log(action);
      state.loading = true;
      state.error = null;
    },
    loadSingleOrderSuccess(state, action) {
      state.loading = false;
      const index = state.orders.findIndex(
        (address) => address.id === action.payload.id
      );

      if (index === -1) state.orders.push(action.payload);
      // state.orders = state.orders.map((order) =>
      //   order.id === action.payload.id ? action.payload : order
      // );
      state.error = null;
    },
    loadSingleOrderFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadAllOrdersRequest,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  loadSingleOrderRequest,
  loadSingleOrderSuccess,
  loadSingleOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
