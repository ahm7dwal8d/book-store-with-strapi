import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helper";

export const setCartData = createAsyncThunk(
  "cartData/setCartData",
  async (values, { rejectedWithValue }) => {
    try {
      const res = await fetch(`${API}cards`, {
        method: "POST",
        headers: {
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

const cartData = createSlice({
  name: "cartData",
  initialState: { isLoading: false, isError: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setCartData.pending, (state) => {
      state.isError = null;
      state.isLoading = true;
      state.data = null;
    }),
      builder.addCase(setCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      }),
      builder.addCase(setCartData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isError = action.payload;
      });
  },
});

export default cartData.reducer;
