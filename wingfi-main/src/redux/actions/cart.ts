// src/store/cart/actions.ts

import { createAction } from "@reduxjs/toolkit";
import { CartItem, CartData } from "../constants/cart";

// Action Types
export const ADD_IN_CART = "cart/addInCart";
export const RESET_CART = "cart/resetCart";
export const CHANGE_PAYMENT_METHOD = "cart/changePaymentMethod";
export const FETCH_CART_DATA_REQUEST = "cart/fetchCartDataRequest";
export const FETCH_CART_DATA_SUCCESS = "cart/fetchCartDataSuccess";
export const FETCH_CART_DATA_FAILURE = "cart/fetchCartDataFailure";

// Action Creators
export const addInCart = createAction<CartItem>(ADD_IN_CART);
export const resetCart = createAction(RESET_CART);
export const changePaymentMethod = createAction<number>(CHANGE_PAYMENT_METHOD);

// Fetch Cart Data Actions
export const fetchCartDataRequest = createAction(FETCH_CART_DATA_REQUEST);
export const fetchCartDataSuccess = createAction<CartData>(
  FETCH_CART_DATA_SUCCESS
);
export const fetchCartDataFailure = createAction<string>(
  FETCH_CART_DATA_FAILURE
);
