import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();

export default store = configureStore({
  reducer: rootReducer,
  middleware: (getdefaultMiddleware) => {
    getdefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    );
  },
});

sagaMiddleware.run(rootSaga);

