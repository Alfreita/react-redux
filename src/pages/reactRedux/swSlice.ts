import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../reduxConfig/store";
import { getStarWars } from "./swapi.service";

interface ISW {
  name: string;
  height: string;
}
export interface ISwState {
  value: Array<ISW>;
  status: "idle" | "loading" | "failed";
}

const initialState: ISwState = {
  value: [],
  status: "idle",
};

export const retrieveSwAsync = createAsyncThunk(
  "sw/people",
  async (people: string) => {
    const response = await getStarWars(people);
    return response.data;
  }
);

export const swSlice = createSlice({
  name: "sw",
  initialState,
  reducers: {
    clear: (state) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(retrieveSwAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(retrieveSwAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.push(action.payload);
      })
      .addCase(retrieveSwAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clear } = swSlice.actions;

export const selectSw = (state: RootState) => state.sw;

export default swSlice.reducer;
