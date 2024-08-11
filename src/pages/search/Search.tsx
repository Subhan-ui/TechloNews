import search from "../../assets/icons/search.svg";

import SearchSection from "../../components/searchSection/SearchSection";
import useQuery from "../../hooks/useQuery";
import Loader from "../../components/loader/Loader";

const Search = () => {
  const { isLoading, handleSubmit, searchText, loading, empty, handleChange } =
    useQuery();

  return (
    <>
      <div className="w-full h-[89vh] flex gap-16 flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-semibold font-plex">
          Search News
        </h1>
        <form
          className="flex w-full justify-center md:static relative right-3 mx-[24px] "
          onSubmit={handleSubmit}
        >
          <button type="submit" className="relative md:left-12 left-8 ">
            <img src={search} alt="search image" />
          </button>
          <input
            value={searchText}
            onChange={handleChange}
            type="text"
            className="md:w-[800px] w-full py-4 h-[54px] md:pl-[74px] pl-[50px]"
            placeholder="Gaza"
          />
        </form>
        {empty && (
          <p className="text-red absolute">You need to Add some text here</p>
        )}
      </div>
      {isLoading &&
        (loading ? (
          <div className="w-full mb-12 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <SearchSection>
            <h4 className="flex items-center md:pl-4 pl-6 py-3 md:h-[54px] h-[83px] font-semibold font-poppins text-lg bg-white">
              Search Results
            </h4>
          </SearchSection>
        ))}
    </>
  );
};

export default Search;
