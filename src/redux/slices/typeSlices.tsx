import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IndexedType {
  [key: number]: number;
}

interface TypeState {
  indexedTypes: IndexedType;
}

const initialIndexedTypes: IndexedType = {
  0: 10,
  1: 10,
  2: 10,
  3: 10,
  4: 10,
  5: 10,
  6: 10,
  7: 10,
  8: 10,
  9: 10,
  10: 10,
  11: 10,
  12: 10,
  13: 10,
  14: 10,
  15: 10,
  16: 10,
  17: 10,
};

const initialState: TypeState = {
  indexedTypes: initialIndexedTypes,
};

export const typeSlices = createSlice({
  name: "type",
  initialState,
  reducers: {
    updateType(state, action: PayloadAction<{ index: number; type: number }>) {
      const { index, type } = action.payload;
      state.indexedTypes[index] = type;
    },
  },
});

export const { updateType } = typeSlices.actions;
