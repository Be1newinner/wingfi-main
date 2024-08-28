import { RootState } from "../rootReducer";

export const selectAnalysis = (state: RootState) => state.analysis.data;
