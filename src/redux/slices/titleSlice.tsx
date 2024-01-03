import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TitleState {
  title: string;
  description: string;
}
const initialState: TitleState = {
  title: "",
  description: "",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    updateTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    updateDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export const { updateTitle, updateDescription } = titleSlice.actions;
