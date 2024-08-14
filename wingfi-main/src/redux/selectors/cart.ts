// src/store/cart/selectors.ts

import { RootState } from "../rootReducer";

export const selectCartState = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartSubtotal = (state: RootState) => state.cart.subtotal;
export const selectCartDelivery = (state: RootState) => state.cart.delivery;
export const selectCartDiscount = (state: RootState) => state.cart.discount;
export const selectCartTax = (state: RootState) => state.cart.tax;
export const selectCartQuantity = (state: RootState) => state.cart.qty;
export const selectCartAddress = (state: RootState) => state.cart.address;
export const selectCartPaymentMethod = (state: RootState) =>
  state.cart.paymentMethod;
