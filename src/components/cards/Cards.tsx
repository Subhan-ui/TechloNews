import Card from "./Card";
import image from "../../assets/cards/image.png";
import { NYTResponse } from "../../models/cardData";
import timeAgo from "../../hooks/convertTime";

const Cards: React.FC<{ data: NYTResponse }> = (props) => {
  return (
    <>
      <div className="mt-2 flex justify-center gap-5 md:mx-0 mx-2 flex-wrap px-[1px]">
        {props.data.map((arr) => {
          const time = timeAgo(arr.published_date);
          return (
            <Card
              key={arr.title}
              id={arr.id}
              image={arr.multimedia?.[2]?.url || image}
              title={arr.title}
              abstract={arr.abstract}
              time={time}
              writer={arr.byline}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
