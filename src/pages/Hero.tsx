import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { NYTResponse } from "../models/cardData";
import { useEffect, useState } from "react";
import AllDetails from "../components/detail/AllDetails";
import ErrorAlert from "../components/errorAlert/ErrorAlert";
import NewsSection from "../components/cards/NewsSection";
import Filter from "../components/pickCards/Filter";

const Hero = () => {
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  const element = data[0];
  return (
    <>
      <AllDetails
        mt="112px"
        width="750px"
        widths="540px"
        title={element.title}
        id={element.id}
        abstract={element.abstract}
        byline={element.byline}
        published_date={element.published_date}
        multimedia={element.multimedia[2]?.url}
      />
      <ErrorAlert />
      <NewsSection>
        <Filter />
      </NewsSection>
    </>
  );
};

export default Hero;
