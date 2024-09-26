import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartDataReducer } from "../constants/cart";

const DELIVERY_FEE = 0;
const DISCOUNT_AMOUNT = 0;

const initialState: CartDataReducer = {
  items: [],
  total: 0,
  subtotal: 0,
  tax: 0,
  delivery: DELIVERY_FEE,
  qty: 0,
  discount: DISCOUNT_AMOUNT,
  paymentMethod: 1,
  loading: false,
  error: null,
};

const loadCartFromLocalStorage = (): CartDataReducer => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
    return initialState;
  }
};

const saveCartToLocalStorage = (state: CartDataReducer) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error(err);
  }
};

const calculateTotals = (items: CartItem[]) => {
  const qty = items.reduce((totalQty, item) => totalQty + item.qty, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const tax = Math.floor(DELIVERY_FEE * 18) / 100;
  const total = Math.floor(
    subtotal + Math.floor(DELIVERY_FEE * 118) / 100 - DISCOUNT_AMOUNT
  );

  return { qty, subtotal: Math.floor(subtotal), tax, total };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addInCart(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.sku === newItem.sku);
      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.sku === newItem.sku
              ? { ...item, qty: Number(newItem.qty) }
              : item
          )
        : [...state.items, newItem];

      const updatedTotals = calculateTotals(updatedItems);
      state.items = updatedItems;
      state.total = updatedTotals.total;
      state.subtotal = updatedTotals.subtotal;
      state.tax = updatedTotals.tax;
      state.qty = updatedTotals.qty;
      state.delivery = DELIVERY_FEE;
      state.discount = DISCOUNT_AMOUNT;

      saveCartToLocalStorage(state); // Save to local storage
    },
    increaseQty(state, action: PayloadAction<string>) {
      const sku = action.payload;
      const itemIndex = state.items.findIndex((item) => item.sku === sku);
      if (itemIndex !== -1) {
        state.items = state.items.map((item, index) =>
          index === itemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        const updatedTotals = calculateTotals(state.items);
        state.total = updatedTotals.total;
        state.subtotal = updatedTotals.subtotal;
        state.tax = updatedTotals.tax;
        state.qty = updatedTotals.qty;

        saveCartToLocalStorage(state); // Save to local storage
      }
    },
    decreaseQty(state, action: PayloadAction<string>) {
      const sku = action.payload;
      const itemIndex = state.items.findIndex((item) => item.sku === sku);
      if (itemIndex !== -1) {
        state.items =
          state.items[itemIndex].qty > 1
            ? state.items.map((item, index) =>
                index === itemIndex ? { ...item, qty: item.qty - 1 } : item
              )
            : state.items.filter((_, index) => index !== itemIndex);
        const updatedTotals = calculateTotals(state.items);
        state.total = updatedTotals.total;
        state.subtotal = updatedTotals.subtotal;
        state.tax = updatedTotals.tax;
        state.qty = updatedTotals.qty;

        saveCartToLocalStorage(state); // Save to local storage
      }
    },
    resetCart() {
      const newState = initialState;
      saveCartToLocalStorage(newState); // Save reset state to local storage
      return newState;
    },
    changePaymentMethod(state, action: PayloadAction<number>) {
      state.paymentMethod = action.payload;
      saveCartToLocalStorage(state); // Save to local storage
    },
    fetchCartDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartDataSuccess(state, action: PayloadAction<CartDataReducer>) {
      const { items, ...rest } = action.payload;
      state.items = items;
      const updatedTotals = calculateTotals(items);
      state.total = updatedTotals.total;
      state.subtotal = updatedTotals.subtotal;
      state.tax = updatedTotals.tax;
      state.qty = updatedTotals.qty;
      state.delivery = DELIVERY_FEE;
      state.discount = DISCOUNT_AMOUNT;
      Object.assign(state, rest);
      state.loading = false;

      saveCartToLocalStorage(state); // Save to local storage
    },
    fetchCartDataFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addInCart,
  increaseQty,
  decreaseQty,
  resetCart,
  changePaymentMethod,
  fetchCartDataRequest,
  fetchCartDataSuccess,
  fetchCartDataFailure,
} = cartSlice.actions;

export default cartSlice.reducer;
