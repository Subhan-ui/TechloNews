import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reduxStates, section, CardData, NYTResponse } from "../../types/types";

const initialState: reduxStates = {
  data: [],
  typeOfData: "Popular",
  section: [
    { section: "politics", display_name: "Politics" },
    { section: "business", display_name: "Business" },
  ],
  selectedCard: {
    id: "",
    title: "",
    abstract: "",
    image: "",
    writer: "",
    time: "",
  },
  query: "",
  queryData: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    settingData(state, action: PayloadAction<NYTResponse>) {
      const data = action.payload.filter((dat) => dat.abstract.length > 0);
      state.data = data;
    },
    settingType(state, action: PayloadAction<string>) {
      state.typeOfData = action.payload;
    },
    settingSection(state, action: PayloadAction<section>) {
      state.section = action.payload;
    },
    handleCardClick(state, action: PayloadAction<CardData>) {
      state.selectedCard = action.payload;
    },
    handleRemovalCard(state) {
      state.selectedCard = {
        id: "",
        title: "",
        abstract: "",
        image: "",
        writer: "",
        time: "",
      };
    },
    handleSearch(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    handleQueryData(state, action: PayloadAction<NYTResponse>) {
      const data = action.payload?.filter((dat) => dat.abstract.length > 0);
      state.queryData = data;
    },
  },
});

export const feedActions = feedSlice.actions;
export default feedSlice.reducer;
