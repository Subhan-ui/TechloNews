import filter from "../../assets/icons/filterImage.svg";

const Filter = () => {
  return (
    <div className="bg-white flex justify-between mb-6 md:mb-0">
      <ul className="flex font-semibold font-poppins text-[18px] md:gap-10 gap-4  h-[83px] md:h-[54px] items-center md:pl-4 pl-6 ">
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
