import cross from "../../assets/icons/cross.svg";

import ReactDOM from "react-dom";
import AllDetails from "../detail/AllDetails";
import timeAgo from "../../hooks/convertTime";
import { ModalProps } from "../../types/modalTypes";


const Backdrop: React.FC<{ hiding: () => void }> = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-[100vh] z-[200] bg-[#000000bf]"
      onClick={props.hiding}
    />
  );
};
const OnlyModal: React.FC<ModalProps> = (props) => {
  const time = timeAgo(props.published_date);
  return (
    <>
      <div className="md:block hidden fixed z-[250]  top-24 left-1/2 transform -translate-x-1/2 p-6 pt-0 rounded-lg w-[95vw] \ h-[596px] 4xl:w-[1462px] bg-white">
        <div className="flex justify-end pt-3 absolute right-3">
          <img
            src={cross}
            alt=""
            className="text-end cursor-pointer"
            onClick={props.hiding}
          />
        </div>
        <AllDetails
          marginTop="40px"
          width="750px"
          widths="540px"
          title={props.title}
          id={props.id}
          abstract={props.abstract}
          byline={props.byline}
          published_date={props.published_date}
          multimedia={props.multimedia}
        />
      </div>

      <div className="block md:hidden fixed overflow-y-scroll h-[85vh] pb-4 z-[250] top-[104px] w-[92vw]  left-1/2 transform -translate-x-1/2 p-6 pt-0 rounded-lg  bg-white">
        <div className="flex justify-end relative left-3">
          <img
            src={cross}
            alt="cross"
            className="block h-[11.3px] w-[11.3px] my-2 cursor-pointer"
            onClick={props.hiding}
          />
        </div>
        <div className="mt-2 relative ">
          <img
            src={props.multimedia}
            className="h-[347px] text-center"
            alt="image of your card"
          />
          <p className="text-red font-bold mt-4">Trending</p>
          <h1 className="text-2xl font-semibold font-serif">{props.title}</h1>
          <p className="text-gray text-sm">{props.abstract}</p>
          <div className="absolute -bottom-[194px] w-full">
            <p className="text-sm text-center ">{time}</p>
            <p className="pt-2 text-center text-sm text-gray opacity-70">
              {props.byline}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Modals: React.FC<ModalProps> = (props) => {
  return (
    <div className="animate_animated animate__backInUp">
      {ReactDOM.createPortal(
        <Backdrop hiding={props.hiding} />,
        document.getElementById("backdrop") as HTMLDivElement
      )}
      {ReactDOM.createPortal(
        <OnlyModal {...props} />,
        document.getElementById("modal") as HTMLDivElement
      )}
    </div>
  );
};

export default Modals;
