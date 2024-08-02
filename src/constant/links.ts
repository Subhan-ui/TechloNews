export const searchURL = (search: string | null) => {
  return `${import.meta.env.VITE_APP_SEARCH_URL}${search}&api-key=${import.meta.env.VITE_APP_API_KEY}`;
};

export const categoryURL:string = import.meta.env.VITE_APP_CATEGORY_URL

export const sectionsURL = (category: string) => {
  return `${import.meta.env.VITE_APP_SECTION_URL}${category}.json?limit=20&api-key=${import.meta.env.VITE_APP_API_KEY}`;
};
