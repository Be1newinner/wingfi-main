import { combineReducers } from "@reduxjs/toolkit";

import cart from "./reducers/cart";
import auth from "./reducers/auth";
import order from "./reducers/order";
import analysis from "./reducers/analysis";
import bestSeller from "./reducers/bestSeller";
import product from "./reducers/topProduct";
import country from "./reducers/country";
import order2 from "./reducers/order2";
import productOverview from "./reducers/productOverview";
import revenue from "./reducers/revenue";
import notification from "./reducers/notification";
import report from "./reducers/report";
import category from "./reducers/category"

export const rootReducer = combineReducers({
  // address,
  cart,
  auth,
  order,
  analysis,
  bestSeller,
  product,
  country,
  order2,
  productOverview,
  revenue,
  notification,
  report,
  category
});

export type RootState = ReturnType<typeof rootReducer>;
