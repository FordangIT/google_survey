import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

interface Question {
  index: number;
}

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [{ index: 1 }],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<{ index: number }>) => {
      return produce(state, (draftState) => {
        draftState.questions.push(action.payload);
      });
    },
    removeQuestion: (state, action: PayloadAction<number>) => {
      return produce(state, (draftState) => {
        draftState.questions.splice(action.payload, 1);
      });
    },
  },
});

export const { addQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;
