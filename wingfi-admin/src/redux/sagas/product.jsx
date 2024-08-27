import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchProductFailure,
  fetchProductSuccess,
} from "../actions/ProductAction";
import { FETCH_PRODUCT_REQUEST } from "../constants/Product";

export function* fetchProductSaga() {
  try {
    const productData = yield call();
    console.log("fetch Product Api", productData);

    yield put(fetchProductSuccess(productData));
  } catch (error) {
    yield put(fetchProductFailure(error));
  }
}

export function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT_REQUEST, fetchProductSaga);
}
