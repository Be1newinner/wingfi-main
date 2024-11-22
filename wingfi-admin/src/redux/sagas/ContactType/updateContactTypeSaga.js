import { call, put, takeEvery } from 'redux-saga/effects';

import { updateContactTypeRequest, updateContactTypeSuccess, updateContactTypeFailure } from '../../reducers/ContactType/updateContactTypeReducer';
import { updateContactType } from '../../../service/api';

function* updateContactTypeSaga(action) {
    try {
        const response = yield call(updateContactType, action.payload);
        const res = response.data.data || response.data;
        yield put(updateContactTypeSuccess(res));
    } catch (error) {
        yield put(updateContactTypeFailure(error));
    }
}

export function* updateContactTypeSagaWatcher() {
    yield takeEvery(updateContactTypeRequest, updateContactTypeSaga);
}