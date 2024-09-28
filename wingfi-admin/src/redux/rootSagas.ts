import { all } from "redux-saga/effects";

import { productsSagaWatcher } from "./sagas/products";

export default function* rootSaga() {
  yield all([productsSagaWatcher()]);
}
