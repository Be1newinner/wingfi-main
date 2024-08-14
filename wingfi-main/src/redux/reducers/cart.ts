import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartData } from "../constants/cart";

const delivery = 0;
const discount = 0;

const loadState = (): CartData | undefined => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = localStorage.getItem("CartData");
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error("Could not load state", err);
      return undefined;
    }
  }
  return undefined;
};

const saveState = (state: CartData): void => {
  if (typeof window !== "undefined") {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("CartData", serializedState);
    } catch (err) {
      console.error("Could not save state", err);
    }
  }
};

const persistedState = loadState();

const initialState: CartData = persistedState || {
  items: [],
  total: 0,
  subtotal: 0,
  tax: 0,
  delivery: 0,
  qty: 0,
  discount: 0,
  address: {
    fulladdress: "",
    pincode: 0,
  },
  paymentMethod: 1,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addInCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.sku === item.sku);
      if (existingItem) {
        existingItem.qty = Number(item.qty);
      } else {
        state.items.push(item);
      }

      state.qty = state.items.filter((item) => item.qty > 0).length;

      const subtotal = state.items.reduce((total, value) => {
        return total + value.qty * value.price;
      }, 0);

      state.delivery = Math.floor(delivery);
      state.discount = Math.floor(discount);
      state.tax = Math.floor(delivery * 18) / 100;
      state.subtotal = Math.floor(subtotal);
      state.total = Math.floor(
        subtotal + Math.floor(delivery * 118) / 100 - discount
      );

      saveState(state);
    },
    resetCart(state) {
      Object.assign(state, initialState);
      saveState(initialState);
    },
    changePaymentMethod(state, action: PayloadAction<number>) {
      state.paymentMethod = action.payload;
    },
  },
});

export const { addInCart, resetCart, changePaymentMethod } = CartSlice.actions;
export default CartSlice;
