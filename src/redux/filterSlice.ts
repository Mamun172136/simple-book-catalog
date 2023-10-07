import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface filter {
  searchTerm: undefined | string | null;
  publicationDate: string | null;
  genre: string | null;
}

const initialState: filter = {
  searchTerm: null,
  publicationDate: null,
  genre: null,
};

const filterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearchTerm: (state, action: PayloadAction<string | null>) => {
      state.searchTerm = action.payload;
    },
    getGenre: (state, action: PayloadAction<string | null>) => {
      state.genre = action.payload;
    },
    getDate: (state, action: PayloadAction<string | null>) => {
      state.publicationDate = action.payload;
    },
  },
});

export const { getSearchTerm, getGenre, getDate } = filterSlice.actions;
export default filterSlice.reducer;
