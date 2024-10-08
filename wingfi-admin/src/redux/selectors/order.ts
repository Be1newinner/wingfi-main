import { createSelector } from "reselect";
import { RootState } from "../rootReducer";
import { ORDER_SLICE } from "../constants/slices";

export const selectOrderState = (state: RootState) => state[ORDER_SLICE].data;

export const selectOrderState2 = (state: RootState) => state[ORDER_SLICE];

export const selectAllOrders = createSelector(
  [selectOrderState2],
  (orderState) => orderState.data
);

export const selectAllOrdersData = createSelector(
  [selectOrderState2],
  (orderState) => orderState.data
);

export const selectOrderLoading = createSelector(
  [selectOrderState2],
  (orderState) => orderState.loading
);

export const selectOrderError = createSelector(
  [selectOrderState2],
  (orderState) => orderState.error
);
