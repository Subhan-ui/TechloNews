import Card from "../card/Card";
import image from "../../assets/images/image.png";
import { NYTResponse } from "../../types/types";

const Cards: React.FC<{ data: NYTResponse }> = (props) => {
  return (
    <>
      <div className="mt-2 flex justify-center 4xl:gap-0 4xl:justify-between gap-5 md:mx-0 mx-2 flex-wrap">
        {props?.data?.map((arr) => {
          const imageUrl = arr?.multimedia?.[2]?.url
            ? `https://www.nytimes.com/${arr?.multimedia[2]?.url}`
            : image;
          return (
            <Card
              key={arr?.title}
              id={arr?.id}
              image={imageUrl}
              title={arr?.title}
              abstract={arr?.abstract}
              time={arr?.published_date}
              writer={arr?.byline}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
