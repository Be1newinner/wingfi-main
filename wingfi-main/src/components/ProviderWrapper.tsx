"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProviderWrapperProps {
  children: ReactNode;
}

export function ProviderWrapper({ children }: ProviderWrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}
