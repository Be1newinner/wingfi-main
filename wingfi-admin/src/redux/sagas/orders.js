import { call, put, takeEvery } from "redux-saga/effects";

import {
  ordersLoadRequest,
  ordersLoadSuccess,
  ordersLoadFailure,
  loadAllOrdersRequest,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
} from "../reducers/order";

import loadOrdersService from "../../services/orders/loadAllOrders";

function* loadAllOrdersSaga(action) {
  try {
    console.log("payload => ", action.payload)
    const Orders = yield call(loadProductService, action.payload);
    yield put(ordersLoadSuccess(Orders));
  } catch (error) {
    if (error instanceof Error) {
      yield put(ordersLoadFailure(error.message));
    } else {
      yield put(ordersLoadFailure("Unknown error occurred"));
    }
  }
}

function* loadAllOrdersSaga2(action) {
  try {
    console.log("payload => ", action.payload);
    const products = yield call(loadOrdersService, action.payload);
    yield put(loadAllOrdersSuccess(products));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loadAllOrdersFailure(error.message));
    } else {
      yield put(loadAllOrdersFailure("Unknown error occurred"));
    }
  }
}

export function* ordersSagaWatcher() {
  yield takeEvery(loadAllOrdersRequest.type, loadAllOrdersSaga);
  yield takeEvery(ordersLoadRequest.type, loadAllOrdersSaga2);
}

