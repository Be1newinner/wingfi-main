import { call, put, takeEvery } from 'redux-saga/effects';

import { addContactTypeRequest, addContactTypeSuccess, addContactTypeFailed } from '../../reducers/ContactType/addContactTypeReducer';
import { addContactType } from '../../../service/api';

function* addContactTypeSaga(action) {
    try {
        const response = yield call(addContactType, action.payload);
        const res = response.data.data || response.data;
        yield put(addContactTypeSuccess(res));
    } catch (error) {
        yield put(addContactTypeFailed(error));
    }
}

export function* addContactTypeWatcher() {
    yield takeEvery(addContactTypeRequest, addContactTypeSaga);
}