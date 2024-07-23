"use client";

import { ArticleCards } from "./ArticleCards";
import { CardName } from "./CardName";
import Link from "next/link"
import { PiArrowLineUp } from "react-icons/pi";
import { useEffect, useState } from "react";

const categories = [
  "All",
  "News",
  "Music",
  "Discuss",
  "Learning"
];

export const AllBlogPost = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [category, setCategory] = useState("All");
  const [perPage, setPerPage] = useState(9);

  const handleCategory = (category) => {
    setCategory(category);
    setPerPage(9);
  };

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://dev.to/api/articles?page=1&per_page=${perPage}${category !== "All" ? `$tag=${category}` : ""
          }`
        );
        const data = await res.json();

        setArticles(data);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [category, perPage]);


  return (
    <div className="flex flex-col gap-8 w-full lg:w-[1216px] mx-auto px-4 lg:px-0">
      <CardName title="All Blog Post" />
      <div className="flex flex-col lg:flex-row lg:justify-between">

        <div className="flex flex-wrap justify-between font-bold text-xs lg:gap-5">
          {categories.map((item) => (
            <button
              key={item}
              className="px-2 py-1 bg-gray-200 rounded"
              style={{
                color: category === item ? "#4b6bfb" : "",
              }}
              onClick={() => handleCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <Link href={`/blogs`} className="hidden lg:block text-xs font-bold">
          View all
        </Link>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
        {articles.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <ArticleCards
              img={item.cover_image}
              tags={item.tag_list}
              desc={item.description}
              date={item.created_at}
            />
          </Link>
        ))}
      </div>

      <div className="m-auto w-fit flex justify-center">
        <button className="border border-slate-300 hover:bg-gray-100 py-2 px-5 rounded-lg text-base"
          onClick={handleLoadMore}
        >
          {loading ? <p>Loading...</p> : <p>Load More</p>}
        </button>
      </div>
      <Link href="#art" className="flex justify-end">
        <button className="p-4 rounded-full hover:bg-gray-100">
          <PiArrowLineUp />
        </button>
      </Link>
    </div>
  );
};




