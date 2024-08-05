import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sectionsURL, categoryURL } from "../constant/links";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CardData, NYTResponse } from "../types/types";
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
      const url = sectionsURL(category);
      fetchData(url, feedActions.settingData);
    }

    fetchData(categoryURL, feedActions.settingSection);
  }, [category]);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);
  const fetchData = async (url: string | undefined, action: any) => {
    setLoadingData(true);
    if (url) {
      const response = await fetch(url);
      const res = await response.json();
      dispatch(action(res.results));
      setLoadingData(false);
    }
  };
  const card = useSelector(
    (state: RootState) => state.feed.selectedCard
  ) as CardData;
  const handleRemove =()=>{
    dispatch(feedActions.handleRemovalCard())
  }
  return { loading, loadingData,card, handleRemove};
};

export default useFetch;
