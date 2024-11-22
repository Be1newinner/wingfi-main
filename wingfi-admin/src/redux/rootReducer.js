import { combineReducers } from 'redux';
import auth from './reducers/authReducer';
import users from './reducers/usersReducer';
import ratecard from "./reducers/rateCardgetCab";
import service from "./reducers/serviceReducer";
import getlog from "./reducers/getLogReducer"
import searchcontactdetails from "./reducers/searchContactDetailReducer"
import getcontactdetails from './reducers/getContactDetailsReducer';
import addcontactdetails from "./reducers/addContactDetailsReducer";
import addtype from './reducers/ContactType/addContactTypeReducer';
import deletecontacttype from './reducers/ContactType/deleteContactTypeReducer';
import updatecontacttype from './reducers/ContactType/updateContactTypeReducer';
import getcontacttype from './reducers/ContactType/getContactTypeReducer';
import getdashboardoverview from "./reducers/getDashboardOverviewReducer"

export const rootReducer = combineReducers({
  auth,
  users,
  ratecard,
  service,
  getlog,
  searchcontactdetails,
  getcontactdetails,
  addcontactdetails,
  addtype,
  deletecontacttype,
  updatecontacttype,
  getcontacttype,
  getdashboardoverview
})