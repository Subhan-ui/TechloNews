import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { RootState } from "../store/store";
import { CardData } from "../models/cardData";
import Modal from "../components/modal/Modal";
import Loader from "../components/Loader/Loader";
import useFetch from "../hooks/useFetch";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const { loading } = useFetch();
  const card = useSelector(
    (state: RootState) => state.feed.selectedCard
  ) as CardData;

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
