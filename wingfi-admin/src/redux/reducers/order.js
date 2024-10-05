import { createSlice } from "@reduxjs/toolkit";
import { ORDER_SLICE } from "../constants/slices";

const initialState = {
  data: [],
  orders: {},
  totalOrders: 0,
  currentPage: 1,
  loading: false,
  error: "",
};

const ordersSlice = createSlice({
  name: ORDER_SLICE,
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
      state.error = action.payload.error || "An error occurred";
    },
    ordersLoadRequest: (state) => {
      state.loading = true;
    },
    ordersLoadSuccess: (state, action) => {
      // Normalize the orders for easier access
      action.payload.orders.forEach(order => {
        state.orders[order.id] = order;
      });
      state.totalOrders = action.payload.totalCount;
      state.loading = false;
    },
    ordersLoadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error || "An error occurred";
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload.page;
    },
    totalOrdersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    totalOrdersSuccess: (state, action) => {
      state.totalOrders = action.payload.count;
      state.loading = false;
    },
    totalOrdersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error || "An error occurred";
    },
  },
});

// Export actions and reducer
export const {
  ordersLoadRequest,
  ordersLoadSuccess,
  ordersLoadFailure,
  setCurrentPage,
  totalOrdersRequest,
  totalOrdersSuccess,
  totalOrdersFailure,
  loadAllOrdersRequest, loadAllOrdersSuccess, loadAllOrdersFailure
} = ordersSlice.actions;

export default ordersSlice.reducer;

// Selectors
const selectOrdersSlice = (state) => state[ORDER_SLICE];
export const orderSelectors = ordersSlice.getSelectors(selectOrdersSlice);
