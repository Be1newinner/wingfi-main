import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_SLICE } from "../constants/slices";

const initialState = {
  data: [],
  totalProducts: 0,
  currentPage: 1,
  loading: false,
  error: null,
  subtotal: 0,
  shipping: 0,
  tax: 0,
  totalPrice: 0,
};

const productsSlice = createSlice({
  name: PRODUCT_SLICE,
  initialState,
  reducers: {
    loadAllProductsRequest: (state, action) => {
      console.log("SAGA REQUEST => ", action.payload);
      state.loading = true;
    },
    loadAllProductsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.subtotal = action.payload.reduce(
        (total, product) => total + product.price,
        0
      );
      state.shipping = (state.subtotal * 10) / 100;
      state.tax = (state.subtotal * 5) / 100;
      state.totalPrice = state.subtotal - (state.shipping + state.tax);
    },
    loadAllProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addNewProductsRequest: (state, action) => {
      console.log("ADD SAGA REQUEST => ", action.payload);
      state.loading = true;
    },
    addNewProductsSuccess: (state, action) => {
      state.loading = false;
      state.data = [...state.data, action.payload];
      state.subtotal += action.payload.price;
      // state.shipping += action.payload.price;
    },
    addNewProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    },
  },
});

export const {
  loadAllProductsRequest,
  loadAllProductsSuccess,
  loadAllProductsFailure,
  addNewProductsSuccess,
  addNewProductsRequest,
  addNewProductsFailure,
} = productsSlice.actions;
export default productsSlice.reducer;

const selectProductsSlice = (state) => state[PRODUCT_SLICE];
export const productselectors = productsSlice.getSelectors(selectProductsSlice);
