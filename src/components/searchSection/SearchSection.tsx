import Cards from "../searchCardSection/SearchCards";
import useSearch from "../../hooks/useSearch";

const SearchSection: React.FC<{ children: React.ReactNode }> = (props) => {
  const { small, handleViewMore, data } = useSearch();

  return (
    data&&data.length > 0 && (
      <div className="md:mt-8 mt-0 overflow-x-hidden ">
        {props.children}

        <Cards data={small ? data?.slice(0, 6) : data} />

        <div className="text-center my-10">
          <button
            onClick={handleViewMore}
            className=" font-poppins border-[1px] font-medium border-red text-red text-sm px-[63px] py-[22px]"
          >
            {small ? "VIEW MORE" : "View Less"}
          </button>
        </div>
      </div>
    )
  );
};

export default SearchSection;
