import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { feedActions } from "../store/feedSlice";
import { useSelector } from "react-redux";
import { storeStates } from "../models/reduxStates";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const category = useSelector<storeStates>((state) => state.feed.typeOfData);
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
        // setData(res.results)

        dispatch(feedActions.settingSection(res.results));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
