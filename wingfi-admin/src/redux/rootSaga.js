import { all } from 'redux-saga/effects';
import { loginSagaWatcher } from './sagas/authSaga';
import { userSagaWatcher } from './sagas/usersSaga';
import { serviceWatcher } from './sagas/serviceSaga';
import { rateCardSagaWatcher } from './sagas/rateCardSaga';
import { getLogWatcher } from "./sagas/getLogSaga"
import { searchContactDetailWatcher } from "./sagas/searchContactDetailSaga";
import { getContactDetailsWatcher } from "./sagas/getContactDetailsSaga"
import { addContactDetailsSagaWatcher } from './sagas/addContactDetailsSaga';
import { updateContactTypeSagaWatcher } from './sagas/ContactType/updateContactTypeSaga';
import { getContactTypeWatcher } from './sagas/ContactType/getContactTypeSaga';
import { addContactTypeWatcher } from './sagas/ContactType/addContactTypeSaga';
import { deleteContactTypeWatcher } from './sagas/ContactType/deleteContactTypeSaga';
import { getDashboardOverviewWatcher } from './sagas/getDashboardOverviewSaga';

export function* rootSaga() {
  yield all([loginSagaWatcher(), userSagaWatcher(), serviceWatcher(), rateCardSagaWatcher(), getLogWatcher(), searchContactDetailWatcher(), getContactDetailsWatcher(), addContactDetailsSagaWatcher(), addContactTypeWatcher(), deleteContactTypeWatcher(), updateContactTypeSagaWatcher(), getContactTypeWatcher(), getDashboardOverviewWatcher()]);
}