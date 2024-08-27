import { all } from "redux-saga/effects";
import { watchFetchProduct } from "./sagas/product";

export default function* rootSaga() {
  yield all([watchFetchProduct]);
}
