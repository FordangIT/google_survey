import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SwitchState {
  [key: number]: {
    isChecked: boolean;
  };
}
const initialState: SwitchState = {};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    toggleSwitch: (state, action: PayloadAction<{ index: number }>) => {
      const { index } = action.payload;
      if (state[index]) {
        state[index].isChecked = !state[index].isChecked;
      } else {
        state[index] = {
          isChecked: true,
        };
      }
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;
export const selectSwitchState = (state: RootState, index: number) =>
  state.switch[index] ? state.switch[index].isChecked : false;
