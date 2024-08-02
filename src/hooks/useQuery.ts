import { useNavigate, useSearchParams } from "react-router-dom";
import { searchURL } from "../constant/links";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { feedActions } from "../store/slices/feedSlice";
import { NYTResponse, NYTSearch } from "../types/cardData";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useQuery = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchText = useSelector((state: RootState) => state.feed.query);
  const navigate = useNavigate();

  const searchData = searchParams.get("q");
  const url = searchURL(searchData);
  useEffect(() => {
    if (searchData) {
      dispatch(feedActions.handleSearch(searchData));
      handleFetching();
    }
  }, [searchParams]);
  const handleFetching = () => {
    setIsLoading(false);
    fetch(url)
    .then((response) => response.json())
    .then((res) => {
        setLoading(true);
        let data = res.response.docs;
        let data1: NYTResponse = data?.map((dat: NYTSearch) => ({
          id: dat.snippet,
          title: dat.abstract,
          abstract: dat.lead_paragraph,
          byline: dat.byline.original,
          published_date: dat.pub_date,
          multimedia: dat.multimedia,
        }));
        dispatch(feedActions.handleQueryData(data1));
        setLoading(false);
      });
    setIsLoading(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchText.split(" ").join("%20")}`);
    handleFetching();
  };
  return { handleSubmit, isLoading, searchText, loading };
};

export default useQuery;
