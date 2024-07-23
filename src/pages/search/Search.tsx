import { useDispatch } from "react-redux";
import search from "../../assets/icons/search.svg";
import { feedActions } from "../../store/slices/feedSlice";

import SearchSection from "../../components/searchSection/SearchSection";
import useQuery from "../../hooks/useQuery";

const Search = () => {
  const dispatch = useDispatch();
  const { isLoading, handleSubmit, searchText } = useQuery();

  return (
    <>
      <div className="w-full h-[80vh] flex gap-8 flex-col justify-center items-center">
        <h1 className="md:text-5xl text-5xl font-semibold font-plex">
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
          <h4 className="py-2 pl-4 font-semibold font-poppins text-lg bg-white">
            Search Results
          </h4>
        </SearchSection>
      )}
    </>
  );
};

export default Search;
