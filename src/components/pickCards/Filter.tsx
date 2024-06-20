import filter from "../../assets/icons/filterImage.svg";

const Filter = () => {
  return (
    <div className="bg-white flex justify-between">
      <ul className="flex font-semibold text-lg md:gap-8 gap-5 h-[83px] md:h-[54px] items-center pl-5 ">
        <li>Latest Stories</li>
        <li>Opinion</li>
        <li>Health</li>
      </ul>
      <img
        src={filter}
        alt="filterImage"
        className="relative md:inline hidden right-5"
      />
    </div>
  );
};

export default Filter;
