import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { titleSlice } from "./slices/titleSlice";
import { typeSlices } from "./slices/typeSlices";
import { questionSlice } from "./slices/questionSlice";
const rootReducer = combineReducers({
  title: titleSlice.reducer,
  type: typeSlices.reducer,
  questions: questionSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
