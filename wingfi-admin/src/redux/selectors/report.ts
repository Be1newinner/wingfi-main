import { RootState } from "../rootReducer";

export const selectReport = (state: RootState) => state.report.data;
