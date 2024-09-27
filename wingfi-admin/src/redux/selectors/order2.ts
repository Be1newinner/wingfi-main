import { RootState } from "../rootReducer";

export const selectOrder = (state: RootState) => state.order2.data;
