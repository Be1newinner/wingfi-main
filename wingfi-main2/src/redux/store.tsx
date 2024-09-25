import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import { rootReducer as reducer } from "./rootReducer";
import {
  loginRequest,
  loginSuccess,
  logoutRequest,
  rehydrateUser,
  signupRequest,
} from "./reducers/auth";

const sagaMiddleware = createSagaMiddleware();

const actionCreators = {
  loginRequest,
  loginSuccess: () =>
    loginSuccess({
      uid: "HxAPcueKo8Ye06OI48xo6J81ffz2",
      email: "be1ne@gmail.com",
      emailVerified: true,
      phoneNumber: "8130506284",
      photoURL: "",
      displayName: "ABC",
      isAdmin: false,
    }),
  signupRequest,
  logoutRequest,
  rehydrateUser,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: {
    actionCreators,
  },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
