import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

export const selectOrderState = (state: RootState) => state.order;
export const selectGenerateOrderStatusState = (state: RootState) =>
  state.order.success;

export const selectAllOrders = createSelector(
  [selectOrderState],
  (orderState) => orderState.orders
);

export const selectOrderById = (orderId: string) =>
  createSelector([selectAllOrders], (orders) =>
    orders.find((order) => order.id === orderId)
  );

export const selectOrderLoading = createSelector(
  [selectOrderState],
  (orderState) => orderState.loading
);

export const selectOrderError = createSelector(
  [selectOrderState],
  (orderState) => orderState.error
);
