import { call, put, takeEvery } from 'redux-saga/effects';

import { deleteContactTypeRequest, deleteContactTypeSuccess, deleteContactTypeFailure } from '../../reducers/ContactType/deleteContactTypeReducer';
import { deleteContactType } from '../../../service/api';

function* deleteContactTypeSaga(action) {
    try {
        const response = yield call(deleteContactType, action.payload);
        const res = response.data.data || response.data;
        yield put(deleteContactTypeSuccess(res));
    } catch (error) {
        yield put(deleteContactTypeFailure(error));
    }
}

export function* deleteContactTypeWatcher() {
    yield takeEvery(deleteContactTypeRequest.type, deleteContactTypeSaga);
}