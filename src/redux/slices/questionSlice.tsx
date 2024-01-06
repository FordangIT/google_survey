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
        console.log(index, "들어갈 index 222");
        const maxIndex = draftState.questions.reduce((max, question) => {
          return question.index > max ? question.index : max;
        }, 0);
        console.log(maxIndex, "배열 중 몇 index가 제일 큰가");
        const newQuestion: Question = {
          index: maxIndex + 1,
        };
        console.log(newQuestion, "들어가야 할 질문이 index가 뭐가 되어야겠나");
        draftState.questions.splice(index, 0, newQuestion);
      });
    },
    removeQuestion: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      console.log(index, "삭제할 index 잘 들어오나");
      const indexToRemove = state.questions.findIndex(
        (qe) => qe.index === index,
      );
      if (indexToRemove !== -1) {
        state.questions.splice(indexToRemove, 1);
      }
    },
    copyQuestion: (
      state,
      action: PayloadAction<{ qIdx: number; index: number }>,
    ) => {
      return produce(state, (draftState) => {
        const { qIdx, index } = action.payload;
        const maxIndex = draftState.questions.reduce((max, question) => {
          return question.index > max ? question.index : max;
        }, 0);
        const newQuestion: Question = {
          index: index + 1,
        };
        draftState.questions.splice(index, 0, newQuestion);
      });
    },
  },
});

export const { addQuestion, removeQuestion, copyQuestion } =
  questionSlice.actions;
export default questionSlice.reducer;
