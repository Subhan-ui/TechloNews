import filter from "../../assets/icons/filterImage.svg";

const Filter = () => {
  return (
    <div className="bg-white flex justify-between mb-6 md:mb-0">
      <ul className="flex font-semibold font-poppins text-[18px] md:gap-10 gap-4  h-[83px] md:h-[54px] items-center md:pl-4 pl-6 ">
        <li className="relative">Latest Stories <span className="absolute bg-red h-1 w-14 md:w-10 bottom-0 left-0"/></li>
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
