import { createSlice } from "@reduxjs/toolkit";
import notification from "../../offline/notificationCart.json";

const initialState = {
  data: notification,
  notificationloading: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState, 
  reducers: {
    notificationRequest: (state) => {
      state.notificationloading = true;
    },

    notificationSuccess: (state, action) => {
      state.notificationloading = false;
      state.data.push(action.payload);
    },
  },
});

export const { notificationRequest, notificationSuccess } = notificationSlice.actions;
export default notificationSlice.reducer;
