import { call, delay, put, takeEvery } from "redux-saga/effects";
import { Order } from "../constants/order";

import {
  generateOrderSuccess,
  generateOrderFailure,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
  loadSingleOrderSuccess,
  loadSingleOrderFailure,
  resetGenerateOrderState,
  generateOrderRequest,
  loadSingleOrderRequest,
  loadAllOrdersRequest,
} from "../reducers/order";

import {
  generateOrderAPI,
  loadAllOrdersAPI,
  loadSingleOrderAPI,
} from "@/apis/orderApi";
import { resetCart } from "../reducers/cart";

interface GenerateOrderRequestAction {
  type: typeof generateOrderRequest.type;
  payload: Order;
}

interface LoadSingleOrderRequestAction {
  type: typeof loadSingleOrderRequest.type;
  payload: string;
}

function* generateOrderSaga(action: GenerateOrderRequestAction) {
  try {
    const order: Order = yield call(generateOrderAPI, action.payload);
    yield put(generateOrderSuccess(order));
  } catch (error: any) {
    yield put(generateOrderFailure(error.message));
  }
}

function* loadAllOrdersSaga() {
  try {
    const orders: Order[] = yield call(loadAllOrdersAPI);
    yield put(loadAllOrdersSuccess(orders));
  } catch (error: any) {
    yield put(loadAllOrdersFailure(error.message));
  }
}

function* loadSingleOrderSaga(action: LoadSingleOrderRequestAction) {
  try {
    const order: Order | null = yield call(loadSingleOrderAPI, action.payload);
    //
    if (order?.id) yield put(loadSingleOrderSuccess(order));
    else yield put(loadSingleOrderFailure("Order not found"));
    //
  } catch (error: any) {
    yield put(loadSingleOrderFailure(error.message));
  }
}

export function* orderSaga() {
  yield takeEvery(generateOrderRequest.type, generateOrderSaga);
  yield takeEvery(loadAllOrdersRequest.type, loadAllOrdersSaga);
  yield takeEvery(loadSingleOrderRequest.type, loadSingleOrderSaga);
}
