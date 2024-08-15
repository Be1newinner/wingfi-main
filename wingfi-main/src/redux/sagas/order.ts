import { call, put, takeEvery } from "redux-saga/effects";
import {
  GENERATE_ORDER_REQUEST,
  LOAD_ALL_ORDERS_REQUEST,
  LOAD_SINGLE_ORDER_REQUEST,
  GenerateOrderRequestAction,
  LoadSingleOrderRequestAction,
  Order,
} from "../constants/order";

import {
  generateOrderSuccess,
  generateOrderFailure,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  loadSingleOrderSuccess,
  loadSingleOrderFailure,
} from "../actions/order";

import {
  generateOrderAPI,
  loadAllOrdersAPI,
  loadSingleOrderAPI,
} from "@/apis/orderApi";

function* generateOrderSaga(action: GenerateOrderRequestAction) {
  try {
    const orderId: string = yield call(generateOrderAPI, action.payload);
    yield put(generateOrderSuccess(orderId));
  } catch (error: any) {
    yield put(generateOrderFailure(error.message));
  }
}

function* loadAllOrdersSaga(): Generator<any, void, Order[]> {
  try {
    const orders: Order[] = yield call(loadAllOrdersAPI);
    yield put(loadAllOrdersSuccess(orders));
  } catch (error: any) {
    yield put(loadAllOrdersFailure(error.message));
  }
}

function* loadSingleOrderSaga(
  action: LoadSingleOrderRequestAction
): Generator<any, void, Order | null> {
  try {
    const order: Order | null = yield call(loadSingleOrderAPI, action.payload);
    if (order) {
      yield put(loadSingleOrderSuccess(order));
    } else {
      yield put(loadSingleOrderFailure("Order not found"));
    }
  } catch (error: any) {
    yield put(loadSingleOrderFailure(error.message));
  }
}

export function* orderSaga() {
  yield takeEvery(GENERATE_ORDER_REQUEST, generateOrderSaga);
  yield takeEvery(LOAD_ALL_ORDERS_REQUEST, loadAllOrdersSaga);
  yield takeEvery(LOAD_SINGLE_ORDER_REQUEST, loadSingleOrderSaga);
}
