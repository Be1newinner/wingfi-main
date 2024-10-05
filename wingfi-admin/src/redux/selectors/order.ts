import { createSelector } from "reselect";
import { RootState } from "../rootReducer";

export const selectOrderState = (state: RootState) => state.orders.data 

export const selectAllOrders = createSelector(
  [selectOrderState],
  (orderState) => orderState.order
);

// export const selectOrderById = (orderId: string) =>
//   createSelector([selectAllOrders], (orders) =>
//     orders.find((order) => order.id === orderId)
//   );

// export const selectOrderById = () => null;

export const selectOrderLoading = createSelector(
  [selectOrderState],
  (orderState) => orderState.loading
);

export const selectOrderError = createSelector(
  [selectOrderState],
  (orderState) => orderState.error
);
