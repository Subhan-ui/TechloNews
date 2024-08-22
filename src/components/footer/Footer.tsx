import image from "../../assets/images/footerLogo.png";
import wifi from "../../assets/icons/footer/wifilogo.svg";
import twitter from "../../assets/icons/footer/twitter.svg";
import block from "../../assets/icons/footer/block.svg";
import fb from "../../assets/icons/footer/fb.svg";

const Footer = () => {
  return (
    <div className="bg-blue md:h-[250px] md:pt-[79px] md:pb-[54px] text-white">
      <div className=" md:h-[117px] h-[250px]  md:flex 3xl:w-[1366px] xl:w-[100vw] mx-auto hidden justify-around items-center">
        <div className="flex flex-col 3xl:w-[189px] 3xl:h-[107px] items-center justify-center gap-10">
          <img src={image} alt="logo" className="w-[66px] h-[40px]" />
          <p className="text-white font-poppins text-xs">
            copyright © 2020 | NBC NEWS
          </p>
        </div>
        <ul className="font-poppins leading-[31.5px] 3xl:w-[221px] 3xl:h-[116px] font-medium text-sm">
          <li>Privacy Policy</li>
          <li>Do not sell my personal info</li>
          <li>Terms of Services</li>
          <li>nbcnews.com Site Map</li>
        </ul>
        <div className="flex flex-col gap-8">
          <ul className="flex justify-between 3xl:w-[387px] w-[315px] font-poppins font-medium text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Coupons</li>
          </ul>
          <ul className="flex items-center justify-end gap-[51.43px]">
            <li>
              <img src={wifi} alt="" className="h-[28px] w-[28px]"/>
            </li>
            <li>
              <img src={twitter} alt="" className="h-[24px] w-[29px]"/>
            </li>
            <li>
              <img src={block} alt="" className="h-[24px] w-[27px]"/>
            </li>
            <li>
              <img src={fb} alt="" className="h-[27px] w-[27px]"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden block pb-[48px] font-poppins">
        <div className="items-center flex flex-col gap-2 pb-4 pt-[20px]">
          <img src={image} alt="logo" className="h-[40px] block mx-auto " />
          <p className="text-slate-400">copyright © 2020 | NBC NEWS</p>
        </div>
        <ul className="text-center font-bold text-sm">
          <li>About</li>
          <li>Contact</li>
          <li>Career</li>
          <li>Coupons</li>
        </ul>
        <ul className="flex gap-6 justify-center mt-8">
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
