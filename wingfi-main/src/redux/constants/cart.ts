// Action Types

export const FETCH_CART_DATA = "FETCH_CART_DATA";
export const ADD_IN_CART = "ADD_IN_CART";
export const RESET_CART = "RESET_CART";
export const CHANGE_PAYMENT_METHOD = "CHANGE_PAYMENT_METHOD";
export const INCREASE_QTY = "INCREASE_QTY";
export const DECREASE_QTY = "DECREASE_QTY";
export const FETCH_CART_DATA_REQUEST = "FETCH_CART_DATA_REQUEST";
export const FETCH_CART_DATA_SUCCESS = "FETCH_CART_DATA_SUCCESS";
export const FETCH_CART_DATA_FAILURE = "FETCH_CART_DATA_FAILURE";

export interface CartItem {
  sku: string;
  qty: number;
  img: string;
  price: number;
  category: number;
  [key: string]: any;
}

export interface CartData {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  delivery: number;
  qty: number;
  discount: number;
  address: {
    fulladdress: string;
    pincode: number;
  };
  paymentMethod: number;
}

export interface CartItemData {
  qty: number;
  sku: string;
  title: string;
  mrp: string;
  price: number;
}

export interface CartItemsState {
  [sku: string]: CartItemData;
}
