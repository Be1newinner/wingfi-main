import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import category from "../../offline/categoryList.json";

const initialState = {
  data: category,
  categoryloading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState, 
  reducers: {
    categoryRequest: (state) => {
      state.categoryloading = true;
    },

    categorySuccess: (state, action: PayloadAction<any>) => {
      state.categoryloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { categoryRequest, categorySuccess } = categorySlice.actions;
export default categorySlice.reducer;
