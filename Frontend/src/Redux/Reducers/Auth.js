import { createSlice } from "@reduxjs/toolkit";
const Auth = createSlice({
  name: "Auth",
  initialState: { data: null },
  reducers: {
    login(state, action) {
      console.log(action.payload);
      state.data = action.payload;
      localStorage.setItem("Auth", action.payload);
    },
  },
});

export const { login } = Auth.actions;
export default Auth.reducer;
