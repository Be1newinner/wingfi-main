import { RootState } from "../rootReducer";

export const selectCategory = (state: RootState) => state.category.data;
