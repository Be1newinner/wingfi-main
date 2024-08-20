import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomUser {
  uid: string | null;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  displayName: string | null;
  isAdmin: boolean;
}

interface AuthState {
  user: CustomUser;
  loading: boolean;
  error: string | null;
  isRehydrated: boolean;
}

const initialState: AuthState = {
  user: {
    uid: null,
    email: null,
    emailVerified: false,
    phoneNumber: null,
    photoURL: null,
    displayName: null,
    isAdmin: false,
  },
  loading: false,
  error: null,
  isRehydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.loading = true;
      state.error = null;
    },
    signupSuccess(state, action: PayloadAction<CustomUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    signupFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    loginRequestByGoogle(state) {
      state.loading = true;
      state.error = null;
    },
    loginRequest(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<CustomUser>) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequest(state) {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess(state) {
      state.loading = false;
      state.user = {
        uid: null,
        email: null,
        emailVerified: false,
        phoneNumber: null,
        photoURL: null,
        displayName: null,
        isAdmin: false,
      };
    },
    logoutFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    rehydrateUser(state, action: PayloadAction<CustomUser>) {
      state.user = action.payload;
      state.isRehydrated = true;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  rehydrateUser,
  loginRequestByGoogle,
} = authSlice.actions;

export default authSlice.reducer;
