import { RootState } from "../rootReducer";

export const selectProduct = (state: RootState) => state.prodducts.data;
export const selectSubtotal = (state: RootState) => state.prodducts.subtotal;
export const selectShipping = (state: RootState) => state.prodducts.shipping;
export const selectTax = (state: RootState) => state.prodducts.tax;
export const selectTotalPrice = (state: RootState) => state.prodducts.totalPrice;
