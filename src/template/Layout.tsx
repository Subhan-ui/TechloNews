import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { useSelector } from "react-redux";
import { storeStates } from "../models/reduxStates";
import { RootState } from "../store/store";
import { CardData, NYTResponse } from "../models/cardData";
import Modal from "../components/modal/Modal";
import Loader from "../components/Loader/Loader";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const category = useSelector<storeStates>((state) => state.feed.typeOfData);
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/${category}.json?limit=20&api-key=HMJwQch2Zmw48r1NWGfBR9zoG9YAuHeT`
    )
      .then((response) => response.json())
      .then((res) => {
        dispatch(feedActions.settingData(res.results));
      })
      .catch((err) => console.log(err));
  }, [category, dispatch]);
  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=HMJwQch2Zmw48r1NWGfBR9zoG9YAuHeT"
    )
      .then((response) => response.json())
      .then((res) => {
        dispatch(feedActions.settingSection(res.results));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  const card = useSelector(
    (state: RootState) => state.feed.selectedCard
  ) as CardData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return <div className="w-full h-[100vh] flex justify-center items-center">
      <Loader />;
      </div>
  }

  return (
    <>
     {card.title !== "" && (
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
