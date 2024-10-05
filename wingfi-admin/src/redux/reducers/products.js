import { createSlice } from "@reduxjs/toolkit";
import { PRODUCT_SLICE } from "../constants/slices";

const initialState = {
  data: [],
  totalProducts: 0,
  currentPage: 1,
  loading: false,
  error: null,
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
