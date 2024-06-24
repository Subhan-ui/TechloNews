import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { RootState } from "../store/store";
import { CardData, NYTResponse } from "../models/cardData";
import Modal from "../components/modal/Modal";
import Loader from "../components/Loader/Loader";
import { categoryURL, sectionsURL } from "../constant/links";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const category = useSelector<RootState, string>(
    (state) => state.feed.typeOfData
  );
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  const card = useSelector(
    (state: RootState) => state.feed.selectedCard
  ) as CardData;
  
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string, action: any) => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      dispatch(action(res.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (category) {
      const url = sectionsURL(category);
      fetchData(url, feedActions.settingData);
    }
  }, [category, dispatch]);

  useEffect(() => {
    fetchData(categoryURL, feedActions.settingSection);
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {card.title && (
        <Modal
          title={card.title}
          id={card.id}
          abstract={card.abstract}
          byline={card.writer}
          published_date={card.time}
          multimedia={card.image}
          hiding={() => dispatch(feedActions.handleRemovalCard())}
        />
      )}
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
