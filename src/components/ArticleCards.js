// import { format, compareAsc } from "date-fns";
// export const ArticleCards = ({ img, tags, desc, date }) => {
//   const formattedDate = format(new Date(date), "MM/dd/yyyy");
//   return (
//     <div className=" w-[392px] h-[476px] border rounded-lg p-4 flex flex-col gap-6">
//       <img src={img} className="h-60 rounded-lg" />
//       <div className="flex flex-col gap-4">
//         <div className="flex gap-2">
//           {tags.map((tag) => (
//             <p className="w-fit py-2 px-3 bg-[#f7f8ff] rounded-lg text-[#4B6BFB] text-sm">
//               {tag}
//             </p>
//           ))}
//         </div>

//         <p className="text-2xl font-semibold line-clamp-3">{desc}</p>
//       </div>
//       <p className="text-[#97989F]">{date}</p>
//     </div>
//   );
// };

import { format } from "date-fns";

export const ArticleCards = ({ img, tags, desc, date }) => {
  const formattedDate = format(new Date(date), "MM/dd/yyyy");

  return (
    <div className="w-[392px] h-[476px] border rounded-lg p-4 flex flex-col gap-6">
      <img src={img} className="h-60 rounded-lg" />
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="w-fit py-2 px-3 bg-[#f7f8ff] rounded-lg text-[#4B6BFB] text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-2xl font-semibold line-clamp-3">{desc}</p>
      </div>
      <p className="text-[#97989F]">{formattedDate}</p>
    </div>
  );
};
