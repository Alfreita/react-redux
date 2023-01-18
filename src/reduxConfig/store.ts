import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "../pages/defaultRedux/counterSlice";
import swReducer from "../pages/reactRedux/swSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sw: swReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
