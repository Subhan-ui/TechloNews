import AllDetails from "../../components/detail/AllDetails";
import ErrorAlert from "../../components/errorAlert/ErrorAlert";
import NewsSection from "../../components/newSection/NewsSection";
import Filter from "../../components/filter/Filter";
import useSelectFirst from "../../hooks/useSelectFirst";
import image from "../../assets/images/image.png";

const Hero = () => {
  const { element } = useSelectFirst();
  return (
    <>
      {element && (
        <AllDetails
          marginTop="112px"
          width="750px"
          widths="540px"
          title={element?.title}
          id={element?.id}
          abstract={element?.abstract}
          byline={element?.byline}
          published_date={element?.published_date}
          multimedia={element?.multimedia[2]?.url || image}
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
