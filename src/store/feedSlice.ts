import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CardData, NYTResponse } from "../models/cardData";
import { reduxStates, section } from "../models/reduxStates";

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
      state.data = action.payload;
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
      state.queryData = action.payload;
    },
  },
});

export const feedActions = feedSlice.actions;
export default feedSlice.reducer;
