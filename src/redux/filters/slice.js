import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});
export const { changeSearchQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
