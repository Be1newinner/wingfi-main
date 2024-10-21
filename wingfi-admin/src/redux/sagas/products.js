import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  loadAllProductsRequest,
  loadAllProductsSuccess,
  loadAllProductsFailure,
  addNewProductsRequest,
  addNewProductsSuccess,
  addNewProductsFailure,
} from "../reducers/products";

import loadProductService from "../../services/products/loadProductService";
import { addProductService } from "../../services/products/loadProductService";

function* loadAllProductsSaga(action) {
  try {
    console.log("payload => ", action.payload);
    const products = yield call(loadProductService, action.payload);
    yield put(loadAllProductsSuccess(products));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loadAllProductsFailure(error.message));
    } else {
      yield put(loadAllProductsFailure("Unknown error occurred"));
    }
  }
}

function* addProductsSaga(action) {
  try {
    const addProduct = yield call(addProductService, action.payload);
    console.log("SAGA is CALLED!", addProduct);
    yield put(addNewProductsSuccess(addProduct));
  } catch (error) {
    yield put(addNewProductsFailure("Product cannot be added"));
  }
}

export function* productsSagaWatcher() {
  yield takeEvery(loadAllProductsRequest.type, loadAllProductsSaga);
  yield takeLatest(addNewProductsRequest.type, addProductsSaga);
}
