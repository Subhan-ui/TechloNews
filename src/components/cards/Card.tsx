import { useDispatch } from "react-redux";
import { CardData } from "../../models/cardData";
import { feedActions } from "../../store/feedSlice";
import Time from "../detail/Time";
import Reaction from "../detail/Reaction";
import timeAgo from "../../hooks/convertTime";

const Card: React.FC<CardData> = (props) => {
  const dispatch = useDispatch();
  const handleSelection = () => {
    dispatch(feedActions.handleCardClick(props));
  };
  const truncateString = (str: string, wordLimit: number): string => {
    const words = str.split(" ");
    if (words.length <= wordLimit) {
      return str;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  const time = timeAgo(props.time);
  return (
    <>
      <div
        className="w-[438px] h-[520px] bg-white relative"
        onClick={handleSelection}
      >
        <img
          src={props.image}
          alt="image of card"
          className="h-[210px] w-full"
        />
        <h4 className="font-semibold font-serif text-lg mt-2 px-5">
          {truncateString(props.title, 14)}
        </h4>
        <p className="text-sm leading-[22px] font-sans text-[#2A2A2A] px-5">
          {truncateString(props.abstract, 24)}
        </p>
        <div className="absolute w-full bottom-0 ">
          <span className="relative left-5 ">
            <Time time={time} writer={props.writer} />
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
