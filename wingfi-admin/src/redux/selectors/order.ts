import { createSelector } from "reselect";
import { RootState } from "../rootReducer";
import { ORDER_SLICE } from "../constants/slices";

export const selectOrderState = (state: RootState) => state[ORDER_SLICE];

export const selectAllOrders = createSelector(
  [selectOrderState],
  (orderState) => orderState.orders
);

// export const selectOrderById = (orderId: string) =>
//   createSelector([selectAllOrders], (orders) =>
//     orders.find((order) => order.id === orderId)
//   );

export const selectOrderById = () => null;

export const selectOrderLoading = createSelector(
  [selectOrderState],
  (orderState) => orderState.loading
);

export const selectOrderError = createSelector(
  [selectOrderState],
  (orderState) => orderState.error
);
