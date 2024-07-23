import { CardData, NYTResponse } from "./cardData";

export type storeStates = {
  feed: {
    data: NYTResponse;
    typeOfData: string;
    selectedCard: CardData ;
    query: string;
    queryData: NYTResponse;
  };
};

export type reduxStates = {
  data: NYTResponse;
  typeOfData: string;
  section: section;
  selectedCard: CardData ;
  query: string;
  queryData: NYTResponse;
};

export type section = { section: string; display_name: string }[];
