import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const getBooks = createAsyncThunk(
  "Books/getBooks",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}books?pagination[pageSize]=10&populate=*`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);
const books = createSlice({
  name: "Books",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default books.reducer;
