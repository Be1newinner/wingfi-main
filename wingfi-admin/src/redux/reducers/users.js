import { createSlice } from "@reduxjs/toolkit";
import { USERS_SLICE } from "../constants/slices";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

const usersSlice = createSlice({
  name: USERS_SLICE,
  initialState,
  reducers: {
    loadAllUsersRequest: (state, action) => {
      console.log("SAGA REQUEST => ", action.payload);
      state.loading = true;
    },
    loadAllUsersSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadAllUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadAllUsersRequest,
  loadAllUsersSuccess,
  loadAllUsersFailure,
} = usersSlice.actions;
export default usersSlice.reducer;

const selectUsersSlice = (state) => state[USERS_SLICE];
export const userselectors = usersSlice.getSelectors(selectUsersSlice);
