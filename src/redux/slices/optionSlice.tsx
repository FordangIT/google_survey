import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Option {
  index: number;
  value: string;
}

interface OptionState {
  options: { [key: number]: Option[] };
}

const initialState: OptionState = {
  options: { 0: [{ index: 1, value: "" }] },
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<{ qIdx: number }>) => {
      const questionOptions = state.options[action.payload.qIdx];
      const lastIndex = Math.max(...questionOptions.map((el) => el.index), 0);
      state.options[action.payload.qIdx].push({
        index: lastIndex + 1,
        value: "",
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
