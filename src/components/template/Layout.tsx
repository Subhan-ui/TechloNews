import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Modal from "../modal/Modal";
import Loader from "../Loader/Loader";
import useFetch from "../../hooks/useFetch";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const { loading, loadingData, card, handleRemove } = useFetch();

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      {card?.title && (
        <Modal
          title={card?.title}
          id={card?.id}
          abstract={card?.abstract}
          byline={card?.writer}
          published_date={card?.time}
          multimedia={card?.image}
          hiding={handleRemove}
        />
      )}
      <Navbar />
      {loadingData ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        props.children
      )}
      <Footer />
    </>
  );
};

export default Layout;
