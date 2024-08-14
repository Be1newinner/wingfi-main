import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const delivery = 0;
const discount = 0;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const persistedState = loadState();

const initialState = persistedState || {
  items: {},
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

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addInCart(state, action) {
      const data = JSON.parse(action.payload);
      const newState = produce(state, (draftState) => {
        draftState.items[data.sku] = data;
        draftState.qty = Object.values(draftState.items)?.filter(
          (item) => item.qty > 0
        ).length;
      });

      const updatedState = produce(newState, (draftState) => {
        const subtotal = Object.values(newState.items).reduce(
          (total, value) => {
            return total + value.qty * value.price;
          },
          0
        );
        draftState.delivery = Math.floor(delivery);
        draftState.discount = Math.floor(discount);
        draftState.tax = Math.floor(delivery * 18) / 100;
        draftState.subtotal = Math.floor(subtotal);
        draftState.total = Math.floor(
          subtotal + Math.floor(delivery * 118) / 100 - discount
        );
      });

      saveState(updatedState);
      return updatedState;
    },
    resetCart(state) {
      try {
        Object.assign(state, initialState);
        saveState(initialState);
      } catch (error) {
        console.error(error);
      }
    },
    changePaymentMethod(state, action) {
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload;
      });
    },
  },
});

export const { addInCart, resetCart, changePaymentMethod } = CartSlice.actions;
