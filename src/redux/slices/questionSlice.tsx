import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

interface Question {
  index: number;
  title?: string;
}

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [{ index: 0, title: "" }],
};

export const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    updateTitle: (
      state,
      action: PayloadAction<{ index: number; title: string }>,
    ) => {
      const updatedTitle = action.payload.title;
      const index = action.payload.index;
      state.questions[index].title = updatedTitle;
    },
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
    copyQuestion: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;

      // 복사할 질문의 위치
      const currentQuestion = state.questions[index];

      // 현재 questions 배열의 최대 인덱스 찾기
      const maxIndex = Math.max(...state.questions.map((q) => q.index));

      // 복사된 질문 생성 및 추가
      const copiedQuestion = { ...currentQuestion, index: maxIndex + 1 };
      state.questions.splice(index + 1, 0, copiedQuestion);
    },
  },
});

export const { updateTitle, addQuestion, removeQuestion, copyQuestion } =
  questionSlice.actions;
export default questionSlice.reducer;
