/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null,
  loading: true,
  totalPage: null,
  totalRecords: null,
  currentPage: 1,
  itemsPerPage: 10,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    userCorporateRequest: (state, action) => {
      state.loading = true;
      (state.currentPage = action.payload.page),
        (state.itemsPerPage = action.payload.limit);
    },

    userCorporateSuccess: (state, action) => {
      state.data = action.payload;
      state.totalPage = action.payload.pagination.total_pages;
      state.totalRecords = action.payload.pagination.total_records;
      state.loading = false;
    },

    userCorporateFailiure: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    userRetailRequest: (state, action) => {
      // console.log('Saga Request =>', action.payload);
      state.loading = true;
      state.currentPage = action.payload.page;
      state.itemsPerPage = action.payload.limit;
      // console.log('called');
    },

    userRetailSuccess: (state, action) => {
      // console.log('success call');
      state.data = action.payload;
      // console.log('Saga users success =>', action.payload);
      state.loading = false;
    },

    userRetailFailiure: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },

    userVendorRequest: (state, action) => {
      // console.log("Saga Request", action.payload);
      state.loading = true;
      state.currentPage = action.payload.page;
      state.itemsPerPage = action.payload.limit;
    },

    userVendorSuccess: (state, action) => {
      state.data = action.payload;
      // console.log("Saga users Request =>", action.payload);
      state.loading = false;
    },

    userVendorFailiure: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const {
  userCorporateRequest,
  userCorporateSuccess,
  userCorporateFailiure,
  userRetailRequest,
  userRetailSuccess,
  userRetailFailiure,
  userVendorRequest,
  userVendorSuccess,
  userVendorFailiure,
} = userSlice.actions;

export default userSlice.reducer;
