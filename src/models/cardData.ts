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
