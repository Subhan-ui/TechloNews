const ErrorAlert = () => {
  return (
    <>
      <div className="md:h-[80px] h-[181px] relative bottom-2 bg-red mt-0 md:mt-10 md:flex-nowrap flex flex-wrap justify-center items-center gap-3 md:gap-16">
        <button className="bg-[#FFFFFF] text-base font-normal font-poppins text-red md:px-6 md:py-3 px-14 md:mt-0 mt-6 py-4">
          Breaking News
        </button>
        <p className="text-[#FFFFFF] font-poppins md:mx-0 mx-10 text-xl text-center md:mb-0 mb-7 ">
          Kanye West says he's running for president in 2020.
        </p>
      </div>
    </>
  );
};

export default ErrorAlert;
