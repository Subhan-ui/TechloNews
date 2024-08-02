import { useState } from "react";
import { NYTResponse } from "../types/cardData";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useSearch = () => {
  const data = useSelector(
    (state: RootState) => state.feed.queryData as NYTResponse
  );

  const [small, setSmall] = useState(true);
  const handleViewMore = () => {
    setSmall((prev) => !prev);
  };

  return { small, handleViewMore, data };
};

export default useSearch;
