import { RootState } from "../rootReducer";

export const selectProduct = (state: RootState) => state.products.data;
