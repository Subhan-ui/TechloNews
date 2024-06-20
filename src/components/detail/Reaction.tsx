import heart from "../../assets/heart.svg";
import save from "../../assets/save.svg";
import archived from "../../assets/archived.svg";

const Reaction: React.FC<{ className: string }> = (props) => {
  return (
    <>
      <ul
        className={`flex gap-6 justify-center items-center ${props.className}`}
      >
        <li>
          <img src={heart} alt="" />
        </li>
        <li>
          <img src={save} alt="" />
        </li>
        <li>
          <img src={archived} alt="" />
        </li>
      </ul>
    </>
  );
};

export default Reaction;
