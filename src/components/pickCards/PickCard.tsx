const PickCard: React.FC<{
  title: string;
  abstract: string;
  image: string;
  writer: string;
  time: string;
}> = (props) => {
  const truncateString = (str: string, wordLimit: number): string => {
    const words = str.split(" ");
    if (words.length <= wordLimit) {
      return str;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <div className="md:w-[675px] w-full h-[376px] md:flex-nowrap flex-wrap md:h-[150px] md:flex-shrink-0 flex ">
      <img
        src={props.image}
        alt="some Image here"
        className="h-[170px] w-full md:w-auto mx-4 md:mx-0 md:h-[148px]  "
      />
      <div className="md:mx-0 mx-4 pl-2">
        <h3 className="font-serif font-semibold text-lg">
          {truncateString(props.title, 14)}
        </h3>
        <p className="text-sm font-normal">
          {truncateString(props.abstract, 24)}
        </p>
      </div>
    </div>
  );
};

export default PickCard;
