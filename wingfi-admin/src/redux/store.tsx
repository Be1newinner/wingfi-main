import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// import {
//   loginRequest,
//   loginSuccess,
//   logoutRequest,
//   rehydrateUser,
// } from "./reducers/auth";

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

// const actionCreators = {
//   loginRequest,
//   loginSuccess: () =>
//     loginSuccess({
//       uid: "HxAPcueKo8Ye06OI48xo6J81ffz2",
//       email: "be1ne@gmail.com",
//       emailVerified: true,
//       phoneNumber: "8130506284",
//       photoURL: "",
//       displayName: "ABC",
//       isAdmin: false,
//       token: "",
//     }),
//   logoutRequest,
//   rehydrateUser,
// };

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  // devTools: {
  //   actionCreators,
  // },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
