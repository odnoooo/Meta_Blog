import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className=" text-gray-500 flex flex-col gap-6 bg-gray-100 py-16 lg:gap-20 w-screen mt-12 px-3">
      <div className="flex flex-col gap-6 lg:flex-row w-full lg:w-[1216px] m-auto  ">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-black text-lg">About</h2>
          <h3 className="font-semi-bold text-base ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut <br />
            enim ad minim veniam
          </h3>
          <div className="flex flex-col gap-2 text-gray-700">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <nav className="flex gap-10 items-center justufy-center px-55 lg:flex-col lg:gap-2 lg:w-[520px] ">
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>
        <div className="w-[144px] flex justify-between">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-300 flex flex-col py-6 gap-12 lg:flex-row lg:justify-between w-full lg:w-[1216px] m-auto">
        <div className="h-12 flex gap-3 ">
          <img className="object-cover h-12" src="./image/Logo (2).png"></img>
          <div className="h-12 ">
            <img
              className="h-5 flex items-center"
              src="./image/MetaBlog (2).png"
            ></img>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex flex-col text-base text-[#3B3C4A] font-normal lg:flex-row lg:gap-4 lg:items-center ">
          <p>Terms of Use</p>
          <p className="invisible lg:visible text-gray-300">|</p>
          <p>Privacy Policy</p>
          <p className="invisible lg:visible text-gray-300">|</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
