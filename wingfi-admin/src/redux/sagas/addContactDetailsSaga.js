import { call, put, takeEvery } from "redux-saga/effects";

import { addContactDetailsRequest, addContactDetailsSuccess, addContactDetailsFailed } from "../reducers/addContactDetailsReducer";
import { addContactDetails } from "../../service/api";


function* addContactDetailsSaga(action) {
    try {
        const response = yield call(addContactDetails, action.payload);
        const res = response.data.data || response.data; 
        yield put(addContactDetailsSuccess(res));
    } catch (error) {
        yield put(addContactDetailsFailed(error));
    }
}

export function* addContactDetailsSagaWatcher() {
    yield takeEvery(addContactDetailsRequest, addContactDetailsSaga);
}