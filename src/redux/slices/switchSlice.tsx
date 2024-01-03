import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SwitchState {
  isChecked: boolean;
}
const initialState: SwitchState = {
  isChecked: false,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
});

export const { toggleSwitch } = switchSlice.actions;
export const selectSwitchState = (state: RootState) => state.switch.isChecked;
export const switchReducer = switchSlice.reducer;
