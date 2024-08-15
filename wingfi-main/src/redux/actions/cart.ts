// src/store/cart/actions.ts

import { createAction } from "@reduxjs/toolkit";
import {
  CartItem,
  CartData,
  ADD_IN_CART,
  RESET_CART,
  CHANGE_PAYMENT_METHOD,
  INCREASE_QTY,
  DECREASE_QTY,
  FETCH_CART_DATA_REQUEST,
  FETCH_CART_DATA_SUCCESS,
  FETCH_CART_DATA_FAILURE,
} from "../constants/cart";

export const fetchCartDataRequest = createAction(FETCH_CART_DATA_REQUEST);
export const fetchCartDataSuccess = createAction<CartData>(
  FETCH_CART_DATA_SUCCESS
);
export const fetchCartDataFailure = createAction<string>(
  FETCH_CART_DATA_FAILURE
);

export const addInCart = (item: CartItem) => ({
  type: ADD_IN_CART,
  payload: item,
});

export const increaseQty = (sku: string) => {
  // console.log("Increase QTY CALLED => ", sku);
  return {
    type: INCREASE_QTY,
    payload: sku,
  };
};
export const decreaseQty = (sku: string) => {
  // console.log("Decrease QTY CALLED => ", sku);
  return {
    type: DECREASE_QTY,
    payload: sku,
  };
};

export const resetCart = () => ({
  type: RESET_CART,
});

export const changePaymentMethod = (paymentMethod: number) => ({
  type: CHANGE_PAYMENT_METHOD,
  payload: paymentMethod,
});
