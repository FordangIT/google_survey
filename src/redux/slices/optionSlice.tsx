import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";
interface Option {
  index: number;
  value: string;
}

interface OptionState {
  options: { [key: number]: Option[] };
}

const initialState: OptionState = {
  options: { 0: [{ index: 0, value: "" }] },
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<{ qIdx: number }>) => {
      return produce(state, (draftState) => {
        const { qIdx } = action.payload;
        if (!draftState.options[qIdx]) {
          draftState.options[qIdx] = [{ index: 0, value: "" }];
        } else {
          const lastIndex = draftState.options[qIdx].length - 1;
          const newIndex = draftState.options[qIdx][lastIndex].index + 1;
          draftState.options[qIdx].push({ index: newIndex, value: "" });
        }
      });
    },
    removeOption: (
      state,
      action: PayloadAction<{ qIdx: number; optionIdx: number }>,
    ) => {
      const questionOptions = state.options[action.payload.qIdx];
      const indexToRemove = questionOptions.findIndex(
        (opt) => opt.index === action.payload.optionIdx,
      );
      if (indexToRemove !== -1) {
        state.options[action.payload.qIdx].splice(indexToRemove, 1);
      }
    },
    updateOptionValue: (
      state,
      action: PayloadAction<{ qIdx: number; optionIdx: number; value: string }>,
    ) => {
      const { qIdx, optionIdx, value } = action.payload;
      const questionOptions = state.options[qIdx];
      const optionToUpdate = questionOptions.find(
        (opt) => opt.index === optionIdx,
      );
      if (optionToUpdate) {
        optionToUpdate.value = value;
      }
    },
  },
});

export const { addOption, removeOption, updateOptionValue } =
  optionSlice.actions;
export default optionSlice.reducer;
