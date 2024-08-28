import { takeEvery } from "redux-saga/effects";
import { ANALYSIS } from "../constants/analysis";

function* analysisSaga(action: GenerateOrderRequestAction) {
    try {
      const order: Order = yield call(generateOrderAPI, action.payload);
      yield put(generateOrderSuccess(order));
    } catch (error: any) {
      yield put(generateOrderFailure(error.message));
    }
  }

  export function* orderSaga() {
    yield takeEvery(ANALYSIS, analysisSaga);
  }