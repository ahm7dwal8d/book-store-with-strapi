import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const getCartItems = createAsyncThunk(
  "cart/getCartData",
  async (_, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}cards?populate=*`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return rejectedWithValue(err.meesage);
    }
  }
);

const cart = createSlice({
  name: "cart",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default cart.reducer;
