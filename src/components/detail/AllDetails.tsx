import Reaction from "./Reaction";
import Time from "./Time";
import image from "../../assets/cards/image.png";
import timeAgo from "../../hooks/convertTime";

const AllDetails: React.FC<{
  width: string;
  widths: string;
  id: string;
  title: string;
  abstract: string;
  byline: string;
  published_date: string;
  multimedia: string;
  mt: string;
}> = (props) => {
  const time = timeAgo(props.published_date);
  return (
    <>
      <div
        className={`md:flex hidden gap-16 items-center `}
        style={{ marginTop: props.mt }}
      >
        <img
          src={props.multimedia || image}
          alt="Hero"
          className={`w-[750px] h-[500px]`}
        />
        <div className={` h-[320px] w-[540px]`}>
          <div className={`flex justify-between w-[540px] mb-[33px]`}>
            <span className="text-[#C31815] font-bold">Trending</span>
            <Reaction className="" />
          </div>
          <div>
            <h4 className="font-bold text-3xl text-left font-serif text-[#2A2A2A]">
              {props.title}
            </h4>
            <p className="text-[15px] text-[#2A2A2A] leading-6">
              {props.abstract}
            </p>
          </div>
          <Time time={time} writer={props.byline} />
        </div>
      </div>
      <div className="relative inline-block h-[456px] mt-20 overflow-hidden place-items-center md:hidden mb-0 ">
        <img src={image} alt="Sample" className="block h-[456px] w-full " />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 p-5 flex items-end">
          <p className="text-white font-bold text-2xl">{props.title}</p>
        </div>
      </div>
    </>
  );
};

export default AllDetails;
