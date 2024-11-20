import { createSlice } from "@reduxjs/toolkit";

// interface CustomUser {
//   uid: string | null;
//   email: string | null;
//   emailVerified: boolean;
//   phoneNumber: string | null;
//   photoURL: string | null;
//   displayName: string | null;
//   isAdmin: boolean;
//   token: string | null;
// }
/* 
 uid: "ABCD",
 email: "be1ne@gmail.com",
 emailVerified: true,
 phoneNumber: "8130506284",
 photoURL: "",
 displayName: "ABC",
 isAdmin: false,
 */

// interface AuthState {
//   user: CustomUser;
//   loading: boolean;
//   error: string | null;
//   isRehydrated: boolean;
// }

const initialState = {
  user: {
    uid: null,
    email: null,
    emailVerified: false,
    phoneNumber: null,
    photoURL: null,
    displayName: null,
    isAdmin: false,
    token: null,
    refreshToken: null,
    tokenExpiry: null
  },
  loading: true,
  error: null,
  isRehydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(
      state,
      action
    ) {
      console.log(action)
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure(state, action) {
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
        token: null,
      };
    },
    logoutFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    rehydrateUser(state, action) {
      state.user = action.payload;
      state.isRehydrated = true;
      state.loading = false;
    },
    triggerRehydrate(state) {
      state.loading = true;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  rehydrateUser,
  triggerRehydrate,
} = authSlice.actions;

export default authSlice.reducer;
