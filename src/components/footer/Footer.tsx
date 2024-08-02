import image from "../../assets/images/footerLogo.png";
import wifi from "../../assets/icons/footer/wifilogo.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import block from "../../assets/icons/footer/block.svg";
import fb from "../../assets/icons/footer/fb.svg";

const Footer = () => {
  return (
    <div className="bg-blue text-white">
      <div className=" h-[250px] md:flex 3xl:w-[1366px] xl:w-[100vw] mx-auto hidden justify-around items-center">
        <div className="flex flex-col items-center justify-center gap-10">
          <img src={image} alt="logo" className="w-[66px] h-[40px]" />
          <p className="text-white font-poppins text-xs">
            copyright © 2020 | NBC NEWS
          </p>
        </div>
        <ul className="font-poppins font-medium text-sm">
          <li>Privacy Policy</li>
          <li>Do not sell my personal info</li>
          <li>Terms of Services</li>
          <li>nbcnews.com Site Map</li>
        </ul>
        <div className="flex flex-col gap-7">
          <ul className="flex gap-10 font-poppins font-medium text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Coupons</li>
          </ul>
          <ul className="flex gap-10">
            <li>
              <img src={wifi} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={block} alt="" />
            </li>
            <li>
              <img src={fb} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden block pb-4 font-poppins">
        <div className="items-center flex flex-col gap-2 py-6">
          <img src={image} alt="logo" className="h-[40px] block mx-auto " />
          <p className="text-slate-400">copyright © 2020 | NBC NEWS</p>
        </div>
        <ul className="text-center font-bold">
          <li>About</li>
          <li>Contact</li>
          <li>Career</li>
          <li>Coupons</li>
        </ul>
        <ul className="flex gap-6 justify-center mt-7">
          <li>
            <img src={wifi} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
          <li>
            <img src={block} alt="" />
          </li>
          <li>
            <img src={fb} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
