const ErrorAlert = () => {
  return (
    <>
      <div className="md:h-[80px] h-[181px] relative bottom-2 bg-red mt-0 md:mt-[50px] md:flex-nowrap flex flex-wrap justify-center items-center gap-3 md:gap-[60px]">
        <button className="bg-white text-base font-normal sm:mt-0  font-poppins text-red md:px-5 md:w-[157px] w-[215px] md:pt-4 md:pb-[17px]  md:mt-0 mt-6 py-3">
          Breaking News
        </button>
        <p className="text-white font-poppins md:mx-0 mx-10 sm:mb-0 text-xl text-center md:mb-0 mb-7 ">
          Kanye West says he's running for president in 2020.
        </p>
      </div>
    </>
  );
};

export default ErrorAlert;
