import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";

interface Option {
  index: number;
}

interface OptionState {
  options: Option[];
}

const initialState: OptionState = {
  options: [{ index: 1 }],
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    addOption: (state, action: PayloadAction<{ index: number }>) => {
      return produce(state, (draftState) => {
        draftState.options.push(action.payload);
      });
    },
    removeOption: (state, action: PayloadAction<number>) => {
      return produce(state, (draftState) => {
        draftState.options.splice(action.payload, 1);
      });
    },
  },
});

export const { addOption, removeOption } = optionSlice.actions;
export default optionSlice.reducer;
