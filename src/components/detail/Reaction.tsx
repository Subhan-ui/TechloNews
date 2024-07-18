import heart from "../../assets/heart.svg";
import save from "../../assets/save.svg";
import archived from "../../assets/archived.svg";

const Reaction: React.FC<{ className: string }> = (props) => {
  return (
    <>
      <ul
        className={`flex gap-6  justify-center items-center ${props.className}`}
      >
        <li className="flex gap-1.5 text-[10px]  justify-center">
          <img src={heart} alt="" className="w-[18px] h-[16px]" /> 234
        </li>
        <li className="flex gap-1.5 text-[10px] justify-center">
          <img src={archived} alt="" className="w-[13px] h-[16px]" />345
        </li>
        <li className="flex gap-1.5 text-[10px] justify-center">
          <img src={save} alt="" className="w-[10px] h-[16px]" />
        </li>
      </ul>
    </>
  );
};

export default Reaction;
