export const searchURL = (search: string | null) => {
  return `https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20120101&end_date=20231231&q=${search}&api-key=HMJwQch2Zmw48r1NWGfBR9zoG9YAuHeT`;
};

export const categoryURL: string =
  "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HMJwQch2Zmw48r1NWGfBR9zoG9YAuHeT";

export const sectionsURL = (category: string) => {
  return `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?limit=20&api-key=HMJwQch2Zmw48r1NWGfBR9zoG9YAuHeT`;
};
