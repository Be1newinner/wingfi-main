import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../constants/order";

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
  success: boolean;
  latestOrderID: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
  success: false,
  latestOrderID: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    generateOrderRequest(state, action: PayloadAction<Order>) {
      state.success = false;
      state.latestOrderID = null;
      state.loading = true;
      state.error = null;
    },
    generateOrderSuccess(state, action: PayloadAction<Order>) {
      state.loading = false;
      state.orders.push(action.payload);
      state.success = true;
      state.latestOrderID = action.payload.id;
    },
    generateOrderFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
    loadAllOrdersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loadAllOrdersSuccess(state, action: PayloadAction<Order[]>) {
      state.loading = false;
      state.orders = action.payload;
    },
    loadAllOrdersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    loadSingleOrderRequest(
      state,
      action: PayloadAction<{ orderid: string; uid: string }>
    ) {
      state.loading = true;
      state.error = null;
    },
    loadSingleOrderSuccess(state, action: PayloadAction<Order>) {
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
    loadSingleOrderFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    resetGenerateOrderState(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.latestOrderID = null;
    },
  },
});

export const {
  generateOrderRequest,
  generateOrderSuccess,
  generateOrderFailure,
  loadAllOrdersRequest,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  loadSingleOrderRequest,
  loadSingleOrderSuccess,
  loadSingleOrderFailure,
  resetGenerateOrderState,
} = orderSlice.actions;

export default orderSlice.reducer;
