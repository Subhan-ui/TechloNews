import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NYTResponse, NYTResponseItem } from "../types/cardData";
import { useEffect, useState } from "react";

const useFirst = () => {
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  const [element, setElement] = useState<NYTResponseItem>();
  useEffect(() => {
    if (data && data.length > 0) {
      setElement(data[0]);
    }
  }, [data]);
  return { element };
};

export default useFirst;
