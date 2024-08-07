import Reaction from "../reaction/Reaction";
import Time from "../time/Time";
import image from "../../assets/images/image.png";
import timeAgo from "../../hooks/convertTime";
import { allDetailType } from "../../types/types";

const AllDetails: React.FC<allDetailType> = (props) => {
  const time = timeAgo(props?.published_date);
  return (
    <>
      <div
        className={`md:flex  hidden xl:gap-16 md:gap-7  md::mx-3 items-center justify-center `}
        style={{ marginTop: props.marginTop }}
      >
        <img
          src={props?.multimedia || image}
          alt="Hero"
          className={`3xl:w-[750px] 3xl:h-[500px] xl:w-[650px] xl:h-[450px] lg:w-[500px] lg:h-[400px]`}
        />
        <div className={` xl:h-[320px] xl:w-[540px] md:h-[320px] md:w-[400px]`}>
          <div className={`flex justify-between  xl:w-[400px] 3xl:w-[540px] lg:w-[400px] md:w-[320px] mb-[33px]`}>
            <span className="text-red font-bold font-poppins">Trending</span>
            <Reaction className="" />
          </div>
          <div>
            <h4 className="font-bold 3xl:text-3xl xl:text-2xl md:text-xl  text-left font-plex text-gray">
              {props?.title}
            </h4>
            <p className="xl:text-[15px] text-xs text-gray leading-6 font-poppins">
              {props?.abstract}
            </p>
          </div>
          <Time time={time} writer={props?.byline} />
        </div>
      </div>
      <div className="relative inline-block h-[456px] mt-20 overflow-hidden place-items-center md:hidden mb-0 ">
        <img src={image} alt="Sample" className="block h-[456px] w-full " />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 p-5 flex items-end">
          <p className="text-white font-bold text-2xl">{props?.title}</p>
        </div>
      </div>
    </>
  );
};

export default AllDetails;
