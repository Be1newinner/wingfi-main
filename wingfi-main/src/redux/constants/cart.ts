export const ADD_IN_CART = "cart/addInCart";
export const RESET_CART = "cart/resetCart";
export const CHANGE_PAYMENT_METHOD = "cart/changePaymentMethod";
export const FETCH_CART_DATA = "cart/fetchCartData";
export const FETCH_CART_DATA_REQUEST = "cart/fetchCartDataRequest";
export const FETCH_CART_DATA_SUCCESS = "cart/fetchCartDataSuccess";
export const FETCH_CART_DATA_FAILURE = "cart/fetchCartDataFailure";

export interface CartItem {
  sku: string;
  qty: number;
  price: number;
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
