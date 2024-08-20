import search from "../../assets/icons/search.svg";

import SearchSection from "../../components/searchSection/SearchSection";
import useQuery from "../../hooks/useQuery";
import Loader from "../../components/loader/Loader";
import useSearch from "../../hooks/useSearch";

const Search = () => {
  const { isLoading, handleSubmit, searchText, loading, empty, handleChange } =
    useQuery();
    const {data} = useSearch();

  return (
    <>
      <div className={`w-full  ${data.length!==0?'mb-[304px] md:mb-[263px] md:mt-[322px] mt-[256px]':'md:h-[89vh] h-[65px]'}  flex gap-16 flex-col items-center md:justify-center justify-start`}>
        <h1 className="md:text-5xl text-center w-full text-3xl font-semibold font-plex">
          Search News
        </h1>
        <form
          className="flex  w-full justify-center md:static relative right-3 mx-[24px] "
          onSubmit={handleSubmit}
        >
          <button type="submit" className="relative md:left-12 left-8 ">
            <img src={search} alt="search image" />
          </button>
          <input
            value={searchText}
            onChange={handleChange}
            type="text"
            className="md:w-[800px] w-[calc(100vw-56px)] pb-[15px] pt-[17px] h-[54px] md:pl-[74px] pl-[50px]"
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
            <h4 className="flex items-center md:pl-[15px] pl-6 pt-[13px] pb-[14px] md:h-[54px] h-[83px] font-semibold font-poppins text-lg bg-white">
              Search Results
            </h4>
          </SearchSection>
        ))}
    </>
  );
};

export default Search;
