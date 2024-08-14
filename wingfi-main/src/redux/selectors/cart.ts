// src/store/cart/selectors.ts

import { CartItemsState } from "../constants/cart";
import { RootState } from "../rootReducer";
import { createSelector } from "reselect";

export const selectCartState = (state: RootState) => state.cart;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartSubtotal = (state: RootState) => state.cart.subtotal;
export const selectCartDelivery = (state: RootState) => state.cart.delivery;
export const selectCartDiscount = (state: RootState) => state.cart.discount;
export const selectCartTax = (state: RootState) => state.cart.tax;
export const selectCartQuantity = (state: RootState) => state.cart.qty;
export const selectCartAddress = (state: RootState) => state.cart.address;
export const selectCartPaymentMethod = (state: RootState) =>
  state.cart.paymentMethod;

const selectCartItemsArray = (state: RootState) => state.cart.items;

export const selectCartItems = createSelector(
  [selectCartItemsArray],
  (items) => {
    const itemsObject: CartItemsState = {};
    items.forEach((item) => {
      itemsObject[item.sku] = { qty: item.qty };
    });
    return itemsObject;
  }
);
