import { useDispatch } from "react-redux";
import { CardData } from "../../types/cardData";
import { feedActions } from "../../store/slices/feedSlice";
import Time from "../time/Time";
import Reaction from "../reaction/Reaction";
import timeAgo from "../../hooks/convertTime";
import truncateString from "../../hooks/useTrucate";
import image from '../../assets/images/image.png'

const Card: React.FC<CardData> = (props) => {
  const dispatch = useDispatch();
  const handleSelection = () => {
    dispatch(feedActions.handleCardClick(props));
  };
  
  const time = timeAgo(props?.time);
  return (
    <>
      <div
        className="w-[438px] h-[520px] bg-white relative"
        onClick={handleSelection}
      >
        <img
          src={props?.image || image}
          alt="image of card"
          className="h-[210px] w-full"
        />
        <h4 className="font-semibold font-plex text-lg mt-2 px-5">
          {truncateString(props?.title, 14)}
        </h4>
        <p className="text-sm leading-[22px] font-nunito text-gray px-5">
          {truncateString(props?.abstract, 24)}
        </p>
        <div className="absolute w-full bottom-0 ">
          <span className="relative left-5 ">
            <Time time={time} writer={truncateString(props?.writer,5)} />
          </span>
          <hr className="mt-5" />
          <div className="h-12 flex justify-center items-center">
            <Reaction className="h-10 gap-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
