import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const getBookBySearch = createAsyncThunk(
  "bookSearch/getBookBySearch",
  async (name, { rejectedWithValue }) => {
    try {
      const res = await fetch(
        `${API}books?filters[book_title][$contains]=${name}&populate=*`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);

const bookSearch = createSlice({
  name: "bookSearch",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookBySearch.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getBookBySearch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getBookBySearch.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default bookSearch.reducer;
