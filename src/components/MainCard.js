import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { Technology } from "./Technology";

export const MainCard = () => {
  return (
    <div className="h-[651px] flex flex-col gap-6">
      <div className="border rounded-2xl h-[600px] flex items-end">
        <div className="h-[341px] m-2 flex rounded-2xl border ">
          <div className="p-10 flex flex-col gap-4">
            <Technology />
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex gap-2 m-auto h-10  ">
        <button className="px-3 border border-[#181A2A] rounded-md">
          <RiArrowLeftWideFill />
        </button>
        <button className="px-3 border border-[#181A2A] rounded-md">
          <RiArrowRightWideFill />
        </button>
      </div>
    </div>
  );
};
