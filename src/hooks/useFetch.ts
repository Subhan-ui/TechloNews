import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { categoryURL, sectionsURL } from "../constant/links";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NYTResponse } from "../models/cardData";
import { feedActions } from "../store/feedSlice";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
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
  }, [category, dispatch]);

  useEffect(() => {
    fetchData(categoryURL, feedActions.settingSection);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);
  const fetchData = async (url: string, action: any) => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      dispatch(action(res.results));
    } catch (err) {
      console.error(err);
    }
  };
  return { loading };
};

export default useFetch;
