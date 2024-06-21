import { useState } from "react";
import { NYTResponse } from "../../models/cardData";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Cards from "../cards/Cards";

const SearchSection: React.FC<{ children: React.ReactNode }> = (props) => {
  const data = useSelector(
    (state: RootState) => state.feed.queryData as NYTResponse
  );

  const [small, setSmall] = useState(true);
  const handleViewMore = () => {
    setSmall((prev) => !prev);
  };

  return (
    data.length > 0 && (
      <div className="md:mt-8 mt-0 overflow-x-hidden ">
        {props.children}

        <Cards data={small ? data?.slice(0, 6) : data} />

        <div className="text-center my-10">
          <button
            onClick={handleViewMore}
            className=" border-[1px] border-[#C31815] text-[#C31815] text-sm px-11 py-4"
          >
            {small ? "VIEW MORE" : "View Less"}
          </button>
        </div>
      </div>
    )
  );
};

export default SearchSection;
