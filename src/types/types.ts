export type timeType = { time: string; writer: string }

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

export type sections = { section: string; display_name: string };
export type section = sections[];

export type pickCardType = {
    title: string;
    abstract: string;
    image: string;
    writer: string;
    time: string;
  };

  export type ModalProps = {
    title: string;
    id: string;
    abstract: string;
    byline: string;
    published_date: string;
    multimedia: string;
    hiding: () => void;
  };

  export type CardData = {
    id: string;
    title: string;
    abstract: string;
    image: string;
    writer: string;
    time: string;
  };
  
  export type NYTResponse = NYTResponseItem[];

  export type NYTResponseItem = {
    id: string; 
    title: string;
    abstract: string;
    byline: string;
    published_date: string;
    multimedia: {
      url: string;
    }[];
  };
  
  export type NYTSearch = {
    snippet: string;
    abstract: string;
    lead_paragraph: string;
    byline: { original: string };
    pub_date: string;
    multimedia: {
      url: string;
    }[];
  };
  
  export type allDetailType = {
    width: string;
    widths: string;
    id: string;
    title: string;
    abstract: string;
    byline: string;
    published_date: string;
    multimedia: string;
    marginTop: string;
  };
  