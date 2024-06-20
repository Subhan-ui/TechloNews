import { useState } from "react";
import { NYTResponse } from "../../models/cardData";

import PickCards from "../pickCards/PickCards";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NewsSection: React.FC<{ children: React.ReactNode }> = (props) => {
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );

  const [small, setSmall] = useState(true);
  const handleViewMore = () => {
    setSmall((prev) => !prev);
  };

  return (
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

      <PickCards data={data?.slice(0, 6)} />
    </div>
  );
};

export default NewsSection;
