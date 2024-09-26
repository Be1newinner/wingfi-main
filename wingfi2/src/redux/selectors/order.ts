import { createSelector } from "reselect";
import { RootState } from "../rootReducer";
import { OrderState, Order } from "../constants/order"; // Assuming you have these types defined

// Select the entire order state from the root state
export const selectOrderState = (state: RootState): OrderState => state.order;

// Select specific properties from the order state
export const selectNewOrderIDState = (state: RootState): string | null =>
  state.order.latestOrderID;

export const selectGenerateOrderStatusState = (state: RootState): boolean =>
  state.order.success;

// Select all orders
export const selectAllOrders = createSelector(
  [selectOrderState],
  (orderState: OrderState): Order[] => orderState.orders
);

// Select a single order by ID
export const selectOrderById = (orderId: string) =>
  createSelector([selectAllOrders], (orders: Order[]): Order | undefined =>
    orders.find((order) => order.id === orderId)
  );

// Select the loading state for orders
export const selectOrderLoading = createSelector(
  [selectOrderState],
  (orderState: OrderState): boolean => orderState.loading
);

// Select the error state for orders
export const selectOrderError = createSelector(
  [selectOrderState],
  (orderState: OrderState): string | null => orderState.error
);
