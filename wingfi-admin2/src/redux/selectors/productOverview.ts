import { RootState } from "../rootReducer";

export const selectProductOverview = (state: RootState) =>
  state.productOverview.data;
