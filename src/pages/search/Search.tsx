import search from "../../assets/icons/search.svg";

import SearchSection from "../../components/searchSection/SearchSection";
import useQuery from "../../hooks/useQuery";
import Loader from "../../components/Loader/Loader";

const Search = () => {
  const { isLoading, handleSubmit, searchText, loading, empty, handleChange } =
    useQuery();

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
            onChange={handleChange}
            type="text"
            className="md:w-[800px] w-full h-[54px] md:pl-16 pl-10"
            placeholder="Gaza"
          />
        </form>
        {empty && (
          <p className="text-red absolute">You need to Add some text here</p>
        )}
      </div>
      {isLoading &&
        (loading ? (
          <div className="w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <SearchSection>
            <h4 className="py-2 pl-4 font-semibold font-poppins text-lg bg-white">
              Search Results
            </h4>
          </SearchSection>
        ))}
    </>
  );
};

export default Search;
