// src/store/order/actions.ts

import {
  GENERATE_ORDER_REQUEST,
  GENERATE_ORDER_SUCCESS,
  GENERATE_ORDER_FAILURE,
  LOAD_ALL_ORDERS_REQUEST,
  LOAD_ALL_ORDERS_SUCCESS,
  LOAD_ALL_ORDERS_FAILURE,
  LOAD_SINGLE_ORDER_REQUEST,
  LOAD_SINGLE_ORDER_SUCCESS,
  LOAD_SINGLE_ORDER_FAILURE,
  Order,
} from "../constants/order";

// Generate Order
export const generateOrderRequest = (order: Order) => ({
  type: GENERATE_ORDER_REQUEST,
  payload: order,
});

export const generateOrderSuccess = (orderId: string) => ({
  type: GENERATE_ORDER_SUCCESS,
  payload: orderId,
});

export const generateOrderFailure = (error: string) => ({
  type: GENERATE_ORDER_FAILURE,
  payload: error,
});

// Load All Orders
export const loadAllOrdersRequest = () => ({
  type: LOAD_ALL_ORDERS_REQUEST,
});

export const loadAllOrdersSuccess = (orders: Order[]) => ({
  type: LOAD_ALL_ORDERS_SUCCESS,
  payload: orders,
});

export const loadAllOrdersFailure = (error: string) => ({
  type: LOAD_ALL_ORDERS_FAILURE,
  payload: error,
});

// Load Single Order
export const loadSingleOrderRequest = (orderId: string) => ({
  type: LOAD_SINGLE_ORDER_REQUEST,
  payload: orderId,
});

export const loadSingleOrderSuccess = (order: Order) => ({
  type: LOAD_SINGLE_ORDER_SUCCESS,
  payload: order,
});

export const loadSingleOrderFailure = (error: string) => ({
  type: LOAD_SINGLE_ORDER_FAILURE,
  payload: error,
});
