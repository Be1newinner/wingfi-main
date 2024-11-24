import { call, put, takeEvery } from 'redux-saga/effects';
import { getContactDetailsRequest, getContactDetailsSuccess, getContactDetailsFailed } from "../reducers/getContactDetailsReducer";
import { getContactDetails } from "../../service/api";

function* getContactDetailsSaga(action) {
    try {
        const { page, limit } = action.payload;

        const response = yield call(getContactDetails, page, limit);
        const res = response.data.data || response.data;
        yield put(getContactDetailsSuccess(res));
    } catch (error) {
        yield put(getContactDetailsFailed(error));
    }
}

export function* getContactDetailsWatcher() {
    yield takeEvery(getContactDetailsRequest, getContactDetailsSaga);
}