import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
  name: "Theme",
  initialState: { theme: null },
  reducers: {
    toggleTheme: (state) => {
      const theme = localStorage.getItem("theme");
      if (state.theme === "light" || theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
      document.documentElement.classList.add(localStorage.getItem("theme"));
    },
  },
});

export const { toggleTheme } = theme.actions;
export default theme.reducer;
