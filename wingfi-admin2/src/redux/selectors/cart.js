// import { CartDataReducer } from "../constants/cart";
// import { RootState } from "../rootReducer";
import { createSelector } from "reselect";

export const selectCartState = (state) => state.cart;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartSubtotal = (state) => state.cart.subtotal;
export const selectCartDelivery = (state) => state.cart.delivery;
export const selectCartDiscount = (state) => state.cart.discount;
export const selectCartTax = (state) => state.cart.tax;
export const selectCartQuantity = (state) => state.cart.qty;
export const selectCartPaymentMethod = (state) =>
  state.cart.paymentMethod;

export const selectCartLoading = (state) =>
  state.cart.loading;
export const selectCartError = (state) =>
  state.cart.error;

const selectCartItemsArray = (state) => state.cart.items;

export const selectCartItems = createSelector(
  [selectCartItemsArray],
  (items) => {
    const itemsObject = {};
    items.forEach((item) => {
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
