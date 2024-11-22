import { put, call, takeEvery } from "redux-saga/effects";
import {  searchContactDetails } from "../../service/api";
import { searchContactDetailRequest, searchContactDetailSuccess, searchContactDetailFailure } from "../reducers/searchContactDetailReducer";

function* searchContactDetailSaga(action) {
  try {
    const response = yield call(searchContactDetails, action.payload);

    const res = response.data.data || response.data;
    yield put(searchContactDetailSuccess(res));
  } catch (error) {
    yield put(searchContactDetailFailure(error));
  }
}

export function* searchContactDetailWatcher(){
    yield takeEvery(searchContactDetailRequest.type, searchContactDetailSaga);
}
