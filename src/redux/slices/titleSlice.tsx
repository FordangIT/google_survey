import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TitleState {
  title: string;
  description: string;
}
const initialState: TitleState = {
  title: "제목 없는 설문지",
  description: "설명 없는 설문지",
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
