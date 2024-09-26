import { call, put, takeEvery } from "redux-saga/effects";
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
} from "@/service/Orders";

interface GenerateOrderRequestAction {
  type: typeof generateOrderRequest.type;
  payload: Order;
}

interface LoadSingleOrderRequestAction {
  type: typeof loadSingleOrderRequest.type;
  payload: { orderid: string; uid: string };
}

interface LoadAllOrderRequestAction {
  type: typeof loadAllOrdersRequest.type;
  payload: { uid: string };
}

function* generateOrderSaga(action: GenerateOrderRequestAction) {
  try {
    const order: Order = yield call(generateOrderAPI, action.payload);
    yield put(generateOrderSuccess(order));
  } catch (error: any) {
    yield put(generateOrderFailure(error.message));
  }
}

function* loadAllOrdersSaga(action: LoadAllOrderRequestAction) {
  try {
    const orders: Order[] = yield call(loadAllOrdersAPI, action.payload.uid);
    yield put(loadAllOrdersSuccess(orders));
  } catch (error: any) {
    yield put(loadAllOrdersFailure(error.message));
  }
}

function* loadSingleOrderSaga(action: LoadSingleOrderRequestAction) {
  try {
    const order: Order | null = yield call(
      loadSingleOrderAPI,
      action.payload.orderid,
      action.payload.uid
    );
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
