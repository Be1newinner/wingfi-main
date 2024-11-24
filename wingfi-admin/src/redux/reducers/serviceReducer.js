import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: true,
  currentPage: 1,
  itemsPerPage: 10
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,

  reducers: {
    // Train Service Reducers
    serviceTrainRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.currentPage=action.payload.limit
    },

    serviceTrainSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    serviceTrainFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Air Service Reducers
    serviceAirRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.currentPage=action.payload.limit
    },

    serviceAirSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    serviceAirFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Bus Service Reducers
    serviceBusRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.currentPage=action.payload.limit
    },

    serviceBusSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    serviceBusFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Hotel Service Reducers
    serviceHotelRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.currentPage=action.payload.limit
    },

    serviceHotelSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    serviceHotelFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Cab Service Reducers
    serviceCabRequest: (state, action) => {
      state.loading = true;
      state.currentPage = action.payload.page;
      state.currentPage=action.payload.limit
    },

    serviceCabSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    serviceCabFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// Exporting all actions
export const {
  serviceTrainRequest,
  serviceTrainSuccess,
  serviceTrainFailure,
  serviceAirRequest,
  serviceAirSuccess,
  serviceAirFailure,
  serviceBusRequest,
  serviceBusSuccess,
  serviceBusFailure,
  serviceHotelRequest,
  serviceHotelSuccess,
  serviceHotelFailure,
  serviceCabRequest,
  serviceCabSuccess,
  serviceCabFailure,
} = serviceSlice.actions;

export default serviceSlice.reducer;
