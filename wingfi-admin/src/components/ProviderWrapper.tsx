"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
// import RehydrationReducer from "./RehydrationReducer";
import { PersistGate } from "redux-persist/es/integration/react";

interface ProviderWrapperProps {
  children: ReactNode;
}

export function ProviderWrapper({ children }: ProviderWrapperProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
