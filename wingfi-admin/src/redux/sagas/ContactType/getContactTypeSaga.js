import {call, put, takeEvery} from 'redux-saga/effects';

import { getContactTypeRequest, getContactTypeSuccess, getContactTypeFailure } from '../../reducers/ContactType/getContactTypeReducer';
import { getContactTypes } from '../../../service/api';

function* getContactTypeSaga(action) {
    try {
        const response = yield call(getContactTypes, action.payload);
        const res = response.data.data || response.data;
        yield put(getContactTypeSuccess(res));
    } catch (error) {
        yield put(getContactTypeFailure(error));
    }
}

export function* getContactTypeWatcher() {
    yield takeEvery(getContactTypeRequest, getContactTypeSaga);
}