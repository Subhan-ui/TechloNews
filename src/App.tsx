import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./template/Layout";
import { CardData, NYTResponse } from "./models/cardData";
import { feedActions } from "./store/feedSlice";
import { RootState } from "./store/store";
import Modal from "./components/modal/Modal";
import Hero from "./pages/Hero";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();

  const card = useSelector(
    (state: RootState) => state.feed.selectedCard
  ) as CardData;
  const data = useSelector(
    (state: RootState) => state.feed.data as NYTResponse
  );
  console.log(card.time);

  return data ? (
    <Router>
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
      <Layout>
        <div className="bg-[#F1F2F3] overflow-y-hidden">
          <div className="relative xl:w-[1366px] w-[100vw] mx-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </Router>
  ) : (
    <div>Loading.....</div>
  );
}

export default App;
