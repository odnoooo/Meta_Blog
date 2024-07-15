import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="text-gray-500 flex flex-col gap-6">
      <div className="m-auto p-10 w-fit">
        <button className="border border-slate-300 py-3 px-5 rounded-lg text-base ">Load more</button>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-black text-lg">About</h2>
          <h3 className="font-semi-bold text-base ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </h3>
          <div className="flex flex-col gap-2 text-gray-700">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <nav className="flex gap-10 items-center justufy-center px-55">
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
      <div className="border-t-[1px]  flex flex-col py-6 gap-12">
        <div className="h-12 flex gap-2 ">
          <img className="object-cover h-12" src="./image/Logo (1).png"></img>
          <div>
            <img className="h-" src="./image/Metablog.png"></img>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base text-current">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
