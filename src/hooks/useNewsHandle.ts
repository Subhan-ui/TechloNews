import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NYTResponse } from "../types/cardData";
import { useState } from "react";

const useNewsHandle = () => {
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );

  const [small, setSmall] = useState(true);
  const handleViewMore = () => {
    setSmall((prev) => !prev);
  };
  return {
    small,
    handleViewMore,
    data,
  };
};

export default useNewsHandle;
