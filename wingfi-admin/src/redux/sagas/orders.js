import { call, put, takeEvery } from "redux-saga/effects";
import loadOrdersService from "../../services/orders/loadAllOrders";
import {
  loadAllOrdersRequest,
  loadAllOrdersSuccess,
  loadAllOrdersFailure,
} from "../reducers/order"; 

function* loadAllOrdersSaga(action) {
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
}
