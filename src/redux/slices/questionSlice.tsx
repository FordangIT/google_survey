import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

interface Question {
  index: number;
}

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [{ index: 0 }],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<{ index: number }>) => {
      return produce(state, (draftState) => {
        const { index } = action.payload;
        const maxIndex = draftState.questions.reduce((max, question) => {
          return question.index > max ? question.index : max;
        }, 0);
        const newQuestion: Question = {
          index: maxIndex + 1,
        };
        draftState.questions.splice(index, 0, newQuestion);
      });
    },
    removeQuestion: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      const questionAtIndex = state.questions[index];
      if (questionAtIndex) {
        const updatedQuestions = state.questions.filter(
          (_, idx) => idx !== index,
        );
        state.questions = updatedQuestions;
      }
    },
    // copyQuestion: (state, action: PayloadAction<{ index: number }>) => {},
  },
});

export const { addQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;
