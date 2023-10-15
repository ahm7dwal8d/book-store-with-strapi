import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const getBooksById = createAsyncThunk(
  "BooksById/getBooksById",
  async (id, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}books/${id}?populate=*`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);

const booksById = createSlice({
  name: "BooksById",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksById.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getBooksById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getBooksById.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default booksById.reducer;
