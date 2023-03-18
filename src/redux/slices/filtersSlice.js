import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  searchQuery: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});
export const { changeSearchQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
