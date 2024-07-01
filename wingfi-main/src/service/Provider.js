"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { AuthProvider } from "./Authentication/AuthContext";

export default function AllProvider({ children }) {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>;
    </AuthProvider>
  );
}
