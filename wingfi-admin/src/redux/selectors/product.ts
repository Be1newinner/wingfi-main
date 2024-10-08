import { PRODUCT_SLICE } from "../constants/slices";
import { RootState } from "../rootReducer";

export const selectProduct = (state: RootState) => state[PRODUCT_SLICE].data;
