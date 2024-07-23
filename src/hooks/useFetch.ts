import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { categoryURL, sectionsURL } from "../constant/links";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NYTResponse } from "../types/cardData";
import { feedActions } from "../store/slices/feedSlice";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  const category = useSelector<RootState, string>(
    (state) => state.feed.typeOfData
  );
  useEffect(() => {
    if (category) {
      setLoadingData(true);
      const url = sectionsURL(category);
      fetchData(url, feedActions.settingData);
      setLoadingData(false);
    }

    fetchData(categoryURL, feedActions.settingSection);

    if (data && data.length > 0) {
      setLoading(false);
    }
    setLoadingData(false)
  }, [category ]);

  const fetchData = async (url: string, action: any) => {
    const response = await fetch(url);
    const res = await response.json();
    dispatch(action(res.results));
  };
  return { loading, loadingData };
};

export default useFetch;
