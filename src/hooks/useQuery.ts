import { useNavigate, useSearchParams } from "react-router-dom";
import { searchURL } from "../constant/links";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { NYTResponse, NYTSearch } from "../models/cardData";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const useQuery = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
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
        let data = res.response.docs;
        let data1: NYTResponse = data.map((dat: NYTSearch) => ({
          id: dat.snippet,
          title: dat.abstract,
          abstract: dat.lead_paragraph,
          byline: dat.byline.original,
          published_date: dat.pub_date,
          multimedia: dat.multimedia,
        }));
        dispatch(feedActions.handleQueryData(data1));
      })
      .catch((err) => console.log(err));
    setIsLoading(true);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${searchText.split(" ").join("%20")}`);
    handleFetching();
  };
  return { handleSubmit, isLoading, searchText };
};

export default useQuery;
