import { createSlice } from "@reduxjs/toolkit";
import country from "../../offline/topCountrySalesList.json";

const initialState = {
  data: country,
  countryloading: false,
};

const countrySlice = createSlice({
  name: "country",
  initialState, 
  reducers: {
    countryRequest: (state) => {
      state.countryloading = true;
    },

    countrySuccess: (state, action) => {
      state.countryloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { countryRequest, countrySuccess } = countrySlice.actions;
export default countrySlice.reducer;
