import PickCards from "../pickCards/PickCards";
import Cards from "../cards/Cards";
import useNewsHandle from "../../hooks/useNewsHandle";

const NewsSection: React.FC<{ children: React.ReactNode }> = (props) => {
  const { small, handleViewMore, data } = useNewsHandle();

  return (
    <div className="md:mt-10 mt-0 overflow-x-hidden overflow-y-hidden md:pb-[60px] pb-6">
      {props.children}
      <Cards data={small ? data?.slice(0, 6) : data} />

      <div className="text-center md:my-[50px] mt-4 mb-[25px]">
        <button
          onClick={handleViewMore}
          className="font-poppins border-[1px] font-medium border-red text-red text-sm pr-[63px] pl-[64px] w-[220px] h-[60px]"
        >
          {small ? "VIEW MORE" : "View Less"}
        </button>
      </div>

      <PickCards data={data?.slice(0, 6)} />
    </div>
  );
};

export default NewsSection;
