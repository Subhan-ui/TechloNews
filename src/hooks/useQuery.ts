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
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchText = useSelector((state: RootState) => state.feed.query);
  const navigate = useNavigate();

  const searchData = searchParams.get("q");
  const url = searchURL(searchData);
  useEffect(() => {
    if (searchData) {
      if (searchData.trim().length > 0) {
        dispatch(feedActions.handleSearch(searchData));
        handleFetching();
      } else if (searchData.trim().length === 0) {
        dispatch(feedActions.handleQueryData([]));
      }
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
    if (searchText.trim().length > 0) {
      setEmpty(false);
      navigate(`/search?q=${searchText.split(" ").join("%20")}`);
      handleFetching();
    } else {
      setEmpty(true);
      navigate("/search");
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(feedActions.handleSearch(value));
    if (value.length > 0) {
      setEmpty(false);
    } else if (value === "") {
      setEmpty(true);
    }
  };
  return { handleSubmit, isLoading, searchText, loading, empty, handleChange };
};

export default useQuery;
