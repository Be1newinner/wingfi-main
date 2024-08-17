import { produce } from "immer";
import {
  GENERATE_ORDER_REQUEST,
  GENERATE_ORDER_SUCCESS,
  GENERATE_ORDER_FAILURE,
  LOAD_ALL_ORDERS_REQUEST,
  LOAD_ALL_ORDERS_SUCCESS,
  LOAD_ALL_ORDERS_FAILURE,
  LOAD_SINGLE_ORDER_REQUEST,
  LOAD_SINGLE_ORDER_SUCCESS,
  LOAD_SINGLE_ORDER_FAILURE,
  OrderState,
  OrderActionTypes,
} from "../constants/order";

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
  success: false,
};

export const orderReducer = (
  state = initialState,
  action: OrderActionTypes
): OrderState =>
  produce(state, (draft) => {
    switch (action.type) {
      case GENERATE_ORDER_REQUEST:
        draft.success = false;
      case LOAD_ALL_ORDERS_REQUEST:
      case LOAD_SINGLE_ORDER_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;

      case GENERATE_ORDER_SUCCESS:
        draft.loading = false;
        draft.orders.push(action.payload);
        draft.success = true;
        break;

      case LOAD_ALL_ORDERS_SUCCESS:
        draft.loading = false;
        draft.orders = action.payload;
        break;

      case LOAD_SINGLE_ORDER_SUCCESS:
        draft.loading = false;
        draft.orders = draft.orders.map((order) =>
          order.id === action.payload.id ? action.payload : order
        );
        break;

      case GENERATE_ORDER_FAILURE:
        draft.success = false;
      case LOAD_ALL_ORDERS_FAILURE:
      case LOAD_SINGLE_ORDER_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;

      default:
        return state;
    }
  });
