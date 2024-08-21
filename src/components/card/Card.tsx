import { useDispatch } from "react-redux";
import { CardData } from "../../types/types";
import { feedActions } from "../../store/slices/feedSlice";
import Time from "../time/Time";
import Reaction from "../reaction/Reaction";
import timeAgo from "../../hooks/convertTime";
import truncateString from "../../hooks/useTrucate";
import image from "../../assets/images/image.png";

const Card: React.FC<CardData> = (props) => {
  const dispatch = useDispatch();
  const handleSelection = () => {
    dispatch(feedActions.handleCardClick(props));
  };

  const time = timeAgo(props?.time);
  return (
    <>
      <div
        className="md:w-[437px] shadow-lg rounded-md mb-[4px] w-[344px] h-[479px] md:h-[520px] bg-white relative"
        onClick={handleSelection}
      >
        <img
          src={props?.image || image}
          alt="image of card"
          className="h-[210px] w-full rounded-t-md"
        />
        <h4 className="font-semibold font-plex text-lg mt-[15px] md:px-[25px] px-5">
          {truncateString(props?.title, 8)}
        </h4>
        <p className="text-sm leading-[22px] md:mt-[17px] mt-[8px] font-nunito text-gray md:px-6 px-5">
          {truncateString(props?.abstract, 15)}
        </p>
        <div className="absolute w-full bottom-0 ">
          <div className="relative w-[400px] md:left-[35px] left-7  ">
            <Time time={time} writer={truncateString(props?.writer, 2)} />
          </div>
          <hr className="md:mt-5 mt-3" />
          <div className="md:h-14 h-[52px] flex justify-center items-center">
            <Reaction className="h-10 gap-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
