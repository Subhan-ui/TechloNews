import img from "../assets/icons/image.png";
import vector from "../assets/icons/vector.svg";
import person from "../assets/icons/person.svg";
import bar from "../assets/icons/bar.svg";
import search from "../assets/icons/search.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const sections = useSelector((state: RootState) => state.feed.section);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleNavigation = (category: string) => {
    const cat = category.split(" ").join("%20");
    dispatch(feedActions.settingType(cat));
    setShow(false);
  };

  return (
    <nav className="w-full bg-white fixed z-[500] ">
      <div className="xl:w-[1366px] w-[100vw] mx-auto xl:px-9 px-8 flex  h-[80px] justify-between items-center">
        <Link to="/">
          <img src={img} alt="Navbar-Image" className=" w-[62px] h-[52px]" />
        </Link>
        <ul className="justify-around w-[893px] items-center xl:flex hidden">
          {sections.slice(0, 7).map((section) => (
            <li
              className="flex cursor-pointer"
              onClick={() => handleNavigation(section.display_name)}
              key={section.section}
            >
              {section.display_name}
            </li>
          ))}
          <li
            className="cursor-pointer"
            onClick={() => setShow((prev: boolean) => !prev)}
          >
            <img src={vector} alt="vector" />
          </li>
        </ul>

        <div className="flex items-center gap-[30px]">
          <img src={person} alt="" className="h-[24px] w-[24px]" />
          <Link to="/search" className="h-[24px] w-[24px]">
            <img src={search} alt="" className="h-[24px] w-[24px]" />
          </Link>

          <img src={bar} alt="" className="h-[24px] w-[24px]" />
        </div>
      </div>
      {show && (
        <div className="absolute w-[50vw] pt-7 ">
          <ul className="bg-white flex flex-wrap rounded-2xl gap-5 relative  left-[40vw] p-8 z-50">
            {sections.slice(7, sections.length + 1).map((section) => (
              <li
                className="flex cursor-pointer"
                key={section.section}
                onClick={() => handleNavigation(section.display_name)}
              >
                {section.display_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
