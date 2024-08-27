import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/ProductReducer";

export const rootReducer = combineReducers({
  product: productReducer,
});
