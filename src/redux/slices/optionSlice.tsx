import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

interface Option {
  index: number;
  value: string; // Each option will have a value
}

interface OptionState {
  options: Option[];
}

const initialState: OptionState = {
  options: [{ index: 1, value: "" }], // Initial value set as an empty string
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<{ index: number }>) => {
      return produce(state, (draftState) => {
        draftState.options.push({ index: action.payload.index, value: "" });
      });
    },
    removeOption: (state, action: PayloadAction<number>) => {
      return produce(state, (draftState) => {
        draftState.options.splice(action.payload, 1);
      });
    },
    updateOptionValue: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      return produce(state, (draftState) => {
        const optionToUpdate = draftState.options.find(
          (opt) => opt.index === action.payload.index,
        );
        if (optionToUpdate) {
          optionToUpdate.value = action.payload.value;
        }
      });
    },
  },
});

export const { addOption, removeOption, updateOptionValue } =
  optionSlice.actions;
export default optionSlice.reducer;
