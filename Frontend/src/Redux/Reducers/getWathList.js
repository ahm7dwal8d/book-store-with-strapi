import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, GET_TOKEN, TOKEN, BEARER } from "../../helper";

const token = GET_TOKEN();

export const getWatchList = createAsyncThunk(
  "watchList/getWatchList",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}wachlists?populate=*`, {
        method: "GET",
        headers: {
          // Authorization: `${BEARER} ${token}`,
        },
      });
      const data = await res.json();
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
    builder.addCase(getWatchList.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getWatchList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getWatchList.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default watchList.reducer;
