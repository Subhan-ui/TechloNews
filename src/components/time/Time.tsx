import { timeType } from "../../types/types";

const Time: React.FC<timeType> = (props) => {
  return (
    <div>
      <p className="text-[13px] text-gray mt-9 font-poppins">
        {props.time}
        <span className="text-xs ml-4 text-gray">
          {props.writer} | 4min read
        </span>
      </p>
    </div>
  );
};

export default Time;
