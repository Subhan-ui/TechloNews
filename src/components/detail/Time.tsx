const Time: React.FC<{ time: string; writer: string }> = (props) => {
  return (
    <div>
      <p className="text-[13px] text-[#2A2A2A] mt-9">
        {props.time}{" "}
        <span className="leading-[21px] text-[#2A2A2A]">
          {props.writer} | 4min read
        </span>
      </p>
    </div>
  );
};

export default Time;
