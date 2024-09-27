import { createSlice } from "@reduxjs/toolkit";
import report from "../../offline/report.json";

const initialState = {
  data: report,
  reportloading: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState, 
  reducers: {
    reportRequest: (state) => {
      state.reportloading = true;
    },

    reportSuccess: (state, action) => {
      state.reportloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { reportRequest, reportSuccess } = reportSlice.actions;
export default reportSlice.reducer;
