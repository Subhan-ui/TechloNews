export type CardData = {
  id: string;
  title: string;
  abstract: string;
  image: string;
  writer: string;
  time: string;
};

export type NYTResponse = {
  id: string; // Assuming id is a string, adjust if it's a different type
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  multimedia: {
    url: string;
  }[];
}[];

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
