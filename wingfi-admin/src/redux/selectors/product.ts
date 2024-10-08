import { PRODUCT_SLICE } from "../constants/slices";
import { RootState } from "../rootReducer";

export const selectProduct = (state: RootState) => state[PRODUCT_SLICE].data;
export const selectSubtotal = (state: RootState) => state[PRODUCT_SLICE].subtotal;
export const selectShipping = (state: RootState) => state[PRODUCT_SLICE].shipping;
export const selectTax = (state: RootState) => state[PRODUCT_SLICE].tax;
export const selectTotalPrice = (state: RootState) => state[PRODUCT_SLICE].totalPrice;
