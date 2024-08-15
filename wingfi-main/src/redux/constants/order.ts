export const GENERATE_ORDER_REQUEST = "GENERATE_ORDER_REQUEST";
export const GENERATE_ORDER_SUCCESS = "GENERATE_ORDER_SUCCESS";
export const GENERATE_ORDER_FAILURE = "GENERATE_ORDER_FAILURE";

export const LOAD_ALL_ORDERS_REQUEST = "LOAD_ALL_ORDERS_REQUEST";
export const LOAD_ALL_ORDERS_SUCCESS = "LOAD_ALL_ORDERS_SUCCESS";
export const LOAD_ALL_ORDERS_FAILURE = "LOAD_ALL_ORDERS_FAILURE";

export const LOAD_SINGLE_ORDER_REQUEST = "LOAD_SINGLE_ORDER_REQUEST";
export const LOAD_SINGLE_ORDER_SUCCESS = "LOAD_SINGLE_ORDER_SUCCESS";
export const LOAD_SINGLE_ORDER_FAILURE = "LOAD_SINGLE_ORDER_FAILURE";

export interface Order {
  id?: string;
  address: {
    fullAddress: string;
    pincode: number;
  };
  status: {
    s0: {
      date: number;
    };
  };
  products: {
    category: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  name: string;
  phone: string;
  total: number;
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

export interface GenerateOrderRequestAction {
  type: typeof GENERATE_ORDER_REQUEST;
  payload: Order;
}

interface GenerateOrderSuccessAction {
  type: typeof GENERATE_ORDER_SUCCESS;
  payload: Order;
}

interface GenerateOrderFailureAction {
  type: typeof GENERATE_ORDER_FAILURE;
  payload: string;
}

interface LoadAllOrdersRequestAction {
  type: typeof LOAD_ALL_ORDERS_REQUEST;
}

interface LoadAllOrdersSuccessAction {
  type: typeof LOAD_ALL_ORDERS_SUCCESS;
  payload: Order[];
}

interface LoadAllOrdersFailureAction {
  type: typeof LOAD_ALL_ORDERS_FAILURE;
  payload: string;
}

export interface LoadSingleOrderRequestAction {
  type: typeof LOAD_SINGLE_ORDER_REQUEST;
  payload: string;
}

interface LoadSingleOrderSuccessAction {
  type: typeof LOAD_SINGLE_ORDER_SUCCESS;
  payload: Order;
}

interface LoadSingleOrderFailureAction {
  type: typeof LOAD_SINGLE_ORDER_FAILURE;
  payload: string;
}

export type OrderActionTypes =
  | GenerateOrderRequestAction
  | GenerateOrderSuccessAction
  | GenerateOrderFailureAction
  | LoadAllOrdersRequestAction
  | LoadAllOrdersSuccessAction
  | LoadAllOrdersFailureAction
  | LoadSingleOrderRequestAction
  | LoadSingleOrderSuccessAction
  | LoadSingleOrderFailureAction;
