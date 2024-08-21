import { timeType } from "../../types/types";

const Time: React.FC<timeType> = (props) => {
  return (
    <div className="">
      <p className="text-[13px] text-gray mt-[30px] font-poppins">
        {props.time}
        <span className="text-xs ml-2 text-gray">
          {props.writer} | 4min
        </span>
      </p>
    </div>
  );
};

export default Time;
