import Card from "./Card";
import image from "../../assets/images/image.png";
import { NYTResponse } from "../../types/cardData";

const Cards: React.FC<{ data: NYTResponse }> = (props) => {
  return (
    <>
      <div className="mt-2 flex justify-center gap-5 md:mx-0 mx-2 flex-wrap px-[1px]">
        {props.data && props.data.map((arr) => {
          return (
            <Card
              key={arr.title}
              id={arr.id}
              image={arr.multimedia?.[2]?.url || image}
              title={arr.title}
              abstract={arr.abstract}
              time={arr.published_date}
              writer={arr.byline}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
