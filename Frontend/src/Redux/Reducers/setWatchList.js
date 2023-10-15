import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, BEARER, GET_TOKEN, TOKEN } from "../../helper";

const token = GET_TOKEN();

export const setwatchList = createAsyncThunk(
  "watchList/setwatchList",
  async (values, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}wachlists`, {
        method: "POST",
        headers: {
          // Authorization: `${BEARER} ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json(data);
      console.log(data);
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);

const watchList = createSlice({
  name: "watchList",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setwatchList.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(setwatchList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(setwatchList.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default watchList.reducer;
