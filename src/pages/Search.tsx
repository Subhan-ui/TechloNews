import { useDispatch } from "react-redux";
import search from "../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { RootState } from "../store/store";

import { NYTResponse, NYTSearch } from "../models/cardData";
import SearchSection from "../components/searchSection/SearchSection";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchURL } from "../constant/links";

const Search = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const searchText = useSelector((state: RootState) => state.feed.query);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
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
  return (
    <>
      <div className="w-full h-[80vh] flex gap-8 flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-bold font-serif">
          Search News
        </h1>
        <form
          className="flex w-full justify-center md:static relative right-3 "
          onSubmit={handleSubmit}
        >
          <button type="submit" className="relative md:left-12 left-8 ">
            <img src={search} alt="search image" />
          </button>
          <input
            value={searchText}
            onChange={(e) => dispatch(feedActions.handleSearch(e.target.value))}
            type="text"
            className="md:w-[800px] w-full h-[54px] md:pl-16 pl-10"
            placeholder="Gaza"
          />
        </form>
      </div>
      {isLoading && (
        <SearchSection>
          <h4 className="py-2 pl-4 font-semibold text-lg bg-white">
            Search Results
          </h4>
        </SearchSection>
      )}
    </>
  );
};

export default Search;
