import heart from "../../assets/icons/heart.svg";
import save from "../../assets/icons/save.svg";
import archived from "../../assets/icons/archived.svg";

const Reaction: React.FC<{ className: string }> = (props) => {
  return (
    <>
      <ul
        className={`flex gap-6 4xl:w-[140px] 4xl:h-[16px] justify-center items-center ${props.className}`}
      >
        <li className="flex gap-1.5 text-[10px]  justify-center items-center  font-poppins">
          <img src={heart} alt="" className="w-[18px] h-[16px]" /> 234
        </li>
        <li className="flex gap-1.5 text-[10px] justify-center items-center font-poppins">
          <img src={archived} alt="" className="w-[13px] h-[16px]" />
          345
        </li>
        <li className="flex gap-1.5 text-[10px] justify-center font-poppins">
          <img src={save} alt="" className="w-[10px] h-[16px]" />
        </li>
      </ul>
    </>
  );
};

export default Reaction;
