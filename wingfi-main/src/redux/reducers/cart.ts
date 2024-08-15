import {
  ADD_IN_CART,
  CartData,
  CartItem,
  CHANGE_PAYMENT_METHOD,
  DECREASE_QTY,
  INCREASE_QTY,
  RESET_CART,
} from "../constants/cart";

// Constants
const DELIVERY_FEE = 0;
const DISCOUNT_AMOUNT = 0;

// Utility function to calculate totals
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

  return {
    qty,
    subtotal: Math.floor(subtotal),
    tax,
    total,
  };
};

// Utility function to persist state
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

// Utility function to load state
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

const persistedState = loadState();

const initialState: CartData = persistedState || {
  items: [],
  total: 0,
  subtotal: 0,
  tax: 0,
  delivery: DELIVERY_FEE,
  qty: 0,
  discount: DISCOUNT_AMOUNT,
  address: {
    fulladdress: "",
    pincode: 0,
  },
  paymentMethod: 1,
};

export const cartReducer = (state = initialState, action: any): CartData => {
  switch (action.type) {
    case ADD_IN_CART: {
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

      const newState = {
        ...state,
        items: updatedItems,
        ...updatedTotals,
        delivery: DELIVERY_FEE,
        discount: DISCOUNT_AMOUNT,
      };

      saveState(newState);
      return newState;
    }

    case INCREASE_QTY: {
      const sku = action.payload;
      const itemIndex = state.items.findIndex((item) => item.sku === sku);

      if (itemIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === itemIndex ? { ...item, qty: item.qty + 1 } : item
        );

        console.log("updatedItems => ", updatedItems);

        const updatedTotals = calculateTotals(updatedItems);

        const newState = {
          ...state,
          items: updatedItems,
          ...updatedTotals,
        };

        saveState(newState);
        return newState;
      }

      return state;
    }

    case DECREASE_QTY: {
      const sku = action.payload;
      const itemIndex = state.items.findIndex((item) => item.sku === sku);

      if (itemIndex !== -1) {
        const updatedItems =
          state.items[itemIndex].qty > 1
            ? state.items.map((item, index) =>
                index === itemIndex ? { ...item, qty: item.qty - 1 } : item
              )
            : state.items.filter((_, index) => index !== itemIndex);

        console.log("updatedItems => ", updatedItems);

        const updatedTotals = calculateTotals(updatedItems);

        const newState = {
          ...state,
          items: updatedItems,
          ...updatedTotals,
        };

        saveState(newState);
        return newState;
      }

      return state;
    }

    case RESET_CART:
      saveState(initialState);
      return initialState;

    case CHANGE_PAYMENT_METHOD: {
      const newState = {
        ...state,
        paymentMethod: action.payload,
      };
      saveState(newState);
      return newState;
    }

    default:
      return state;
  }
};
