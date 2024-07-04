import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MainCards } from "./MainCards";

export const Main = ({ articles }) => {
  return (
    <div className="w-full h-[651px] flex gap-6 ">
      {articles.slice(0, 4).map((item, index) => {
        return (
          <div>
            <MainCards
              key={item.title}
              img={item.cover_image}
              tag={item.tags}
              desc={item.description}
              date={item.created_at}
            />
          </div>
        );
      })}

      <div className="flex gap-2 m-auto h-10  ">
        <button className="px-3 border border-slate-500 rounded-md">
          <RiArrowLeftWideFill />
        </button>
        <button className="px-3 border border-slate-500 rounded-md">
          <RiArrowRightWideFill />
        </button>
      </div>
    </div>
  );
};
