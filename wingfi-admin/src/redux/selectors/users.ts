import { USERS_SLICE } from "../constants/slices";
import { RootState } from "../rootReducer";

export const selectUsers = (state: RootState) => state[USERS_SLICE].data;
