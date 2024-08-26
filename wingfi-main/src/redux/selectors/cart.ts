import { CartDataReducer, CartItemsState } from "../constants/cart";
import { RootState } from "../rootReducer";
import { createSelector } from "reselect";

export const selectCartState = (state: RootState) => state.cart;
export const selectCartTotal = (state: RootState) => state.cart.total;
export const selectCartSubtotal = (state: RootState) => state.cart.subtotal;
export const selectCartDelivery = (state: RootState) => state.cart.delivery;
export const selectCartDiscount = (state: RootState) => state.cart.discount;
export const selectCartTax = (state: RootState) => state.cart.tax;
export const selectCartQuantity = (state: RootState) => state.cart.qty;
export const selectCartPaymentMethod = (state: RootState) =>
  state.cart.paymentMethod;

export const selectCartLoading = (state: { cart: CartDataReducer }) =>
  state.cart.loading;
export const selectCartError = (state: { cart: CartDataReducer }) =>
  state.cart.error;

const selectCartItemsArray = (state: RootState) => state.cart.items;

export const selectCartItems = createSelector(
  [selectCartItemsArray],
  (items) => {
    const itemsObject: CartItemsState = {};
    items.forEach((item: any) => {
      itemsObject[item.sku] = {
        qty: item.qty,
        sku: item.sku,
        title: item.title,
        mrp: item.mrp,
        price: item.price,
      };
    });
    return itemsObject;
  }
);
