import { RootState } from "../rootReducer";

export const selectRevenue = (state: RootState) => state.revenue.data;
