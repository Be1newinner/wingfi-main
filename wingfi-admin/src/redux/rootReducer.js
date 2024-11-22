import { combineReducers } from 'redux';
import auth from './reducers/auth';
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
import orderReducer from "./reducers/order";
import productsReducer from "./reducers/products";
import usersReducer from "./reducers/users";
import { ORDER_SLICE, PRODUCT_SLICE, USERS_SLICE } from "./constants/slices";

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
  getdashboardoverview,
  [ORDER_SLICE]: orderReducer,
  [PRODUCT_SLICE]: productsReducer,
  [USERS_SLICE]: usersReducer,
})