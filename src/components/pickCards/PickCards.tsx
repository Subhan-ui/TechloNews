import { NYTResponse } from "../../models/cardData";
import PickCard from "./PickCard";

const PickCards: React.FC<{ data: NYTResponse }> = (props) => {
  const arrs = props.data && props.data[0];
  return (
    <div className="w-full ">
      <h2 className=" font-semibold ml-5 text-lg mb-6">Editors Picks ⭐</h2>
      <div className="md:flex hidden gap-5 justify-between mb-8 overflow-x-auto overflow-y-hidden ">
        {props.data &&
          props.data.map((arr) => (
            <PickCard
              key={arr.title}
              image={arr?.multimedia[1]?.url}
              title={arr.title}
              abstract={arr.abstract}
              time={arr.published_date}
              writer={arr.byline}
            />
          ))}
      </div>
      <div className="md:hidden block">
        {
          <PickCard
            key={arrs.title}
            image={arrs?.multimedia[1]?.url}
            title={arrs.title}
            abstract={arrs.abstract}
            time={arrs.published_date}
            writer={arrs.byline}
          />
        }
      </div>
    </div>
  );
};

export default PickCards;
