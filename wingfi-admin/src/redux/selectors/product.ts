import { RootState } from "../rootReducer";

export const selectProduct = (state: RootState) => state.prodducts.data;
