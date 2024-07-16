"use client";

import { useEffect, useState } from "react";
import { ArticleCards } from "@/components/ArticleCards";

const BlogsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await res.json();

        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full m-auto px-4 lg:w-[1216px] lg:m-auto">
      <div className=" m-auto flex flex-col gap-20 text-current">
        <div>
          <ArticleCards
            key={item.title}
            img={item.cover_image}
            tags={item.tag_list}
            desc={item.description}
            date={item.created_at}
          />
        </div>
      </div>
    </div>
  );
};
