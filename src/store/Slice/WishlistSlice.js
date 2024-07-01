import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  items: {},
  quantity: 0,
};

export const WishlistSlice = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    addInWishlist(state, action) {
      const data = JSON.parse(action.payload);
      // console.log("PAYLOAD Wishlist ", data);
      return produce(state, (draftState) => {
        draftState.items[data.sku] = data;
        draftState.quantity = Object.values(draftState.items)?.filter(
          (item) => item.quantity > 0
        ).length;
      });
    },
    resetWishlist(state) {
      try {
        Object.assign(state, initialState);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { addInWishlist, resetWishlist } = WishlistSlice.actions;
