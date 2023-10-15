import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const getCategories = createAsyncThunk(
  "Categories/getCategories",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}categories?populate=*`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);

const categories = createSlice({
  name: "Categories",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default categories.reducer;
