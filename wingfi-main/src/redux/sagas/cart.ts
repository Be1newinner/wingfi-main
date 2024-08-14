// src/store/cart/sagas.ts

import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchCartDataSuccess,
  fetchCartDataFailure,
  addInCart,
  resetCart,
} from "../actions/cart";
import { FETCH_CART_DATA_REQUEST } from "../constants/cart";
import { CartData, CartItem } from "../constants/cart";

function* fetchCartDataSaga() {
  try {
    const response: Response = yield call(fetch, "/api/cart");
    const data: CartData = yield response.json();

    const transformedItems = data.items.map((item: CartItem) => ({
      ...item,
      price: item.price * 0.9,
    }));

    yield put(resetCart());
    for (const item of transformedItems) {
      yield put(addInCart(item));
    }

    yield put(fetchCartDataSuccess({ ...data, items: transformedItems }));
  } catch (error: any) {
    yield put(fetchCartDataFailure(error.message));
  }
}

export function* cartSaga() {
  yield takeLatest(FETCH_CART_DATA_REQUEST, fetchCartDataSaga);
}
