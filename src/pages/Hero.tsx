import AllDetails from "../components/detail/AllDetails";
import ErrorAlert from "../components/errorAlert/ErrorAlert";
import NewsSection from "../components/cards/NewsSection";
import Filter from "../components/pickCards/Filter";
import useFirst from "../hooks/useFirst";

const Hero = () => {
  const { element } = useFirst();
  return (
    <>
      {element && (
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
      )}
      <ErrorAlert />
      <NewsSection>
        <Filter />
      </NewsSection>
    </>
  );
};

export default Hero;
