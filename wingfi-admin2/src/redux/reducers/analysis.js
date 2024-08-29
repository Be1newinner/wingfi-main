import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import analysisData from "../../offline/dataAnalytics.json";

const initialState = {
  data: analysisData,
  analysisloading: false,
};

const analysisSlice = createSlice({
  name: "analysis",
  initialState, 
  reducers: {
    AnalysisRequest: (state) => {
      state.analysisloading = true;
    },

    AnalysisSuccess: (state, action: PayloadAction<any>) => {
      state.analysisloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { AnalysisRequest, AnalysisSuccess } = analysisSlice.actions;
export default analysisSlice.reducer;
