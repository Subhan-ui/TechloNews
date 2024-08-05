import truncateString from "../../hooks/useTrucate";
import { pickCardType } from "../../types/types";

const PickCard: React.FC<pickCardType> = (props) => {
  return (
    <div className="md:w-[675px] w-full h-[376px] md:flex-nowrap flex-wrap md:h-[150px] md:flex-shrink-0 flex ">
      <img
        src={props?.image}
        alt="some Image here"
        className="h-[170px] w-full md:w-auto mx-4 md:mx-0 md:h-[148px]  "
      />
      <div className="md:mx-0 mx-4 pl-2">
        <h3 className="font-plex font-bold text-lg">
          {truncateString(props?.title, 14)}
        </h3>
        <p className="text-base text-gray font-nunito font-normal">
          {truncateString(props?.abstract, 24)}
        </p>
      </div>
    </div>
  );
};

export default PickCard;
