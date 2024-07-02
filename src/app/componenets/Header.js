import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="w-[1130px] m-auto flex justify-between py-8 gap-30">
      <img className="h-9" src="./image/Logo.png"></img>
      <div className="flex items-center gap-6">
        <nav className="flex gap-10 items-center justufy-center px-55">
          <a href="">Hom</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>
        <search>
          <form className="flex justify-between items-center bg-[#f4f4f5] px-4 py-2 gap-3">
            <input
              className="border-none bg-transparent"
              name="fsrch"
              id="fsrch"
              placeholder="Search "
            />
            <CiSearch />
          </form>
        </search>
        <FaBars />
      </div>
    </header>
  );
};
