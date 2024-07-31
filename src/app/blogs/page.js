"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleCards } from "@/components/ArticleCards";
import { CardName } from "@/components/CardName";
import { PiArrowLineUp } from "react-icons/pi";

const BlogsPage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [perPage, setPerPage] = useState(12);

  const handleLoadMore = () => {
    setPerPage(perPage + 3);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles"); // Assuming your API endpoint is /api/articles
        const data = await res.json();

        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  useEffect(() => {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?page=1&per_page=${perPage}
      }`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [perPage]);


  return (
    <div className="w-full lg:w-[1216px] px-2 m-auto flex flex-col gap-12">
      <CardName title="All blog post" />

      <div className="flex flex-col lg:grid grid-cols-3 gap-5">
        {articles.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <div>
              <ArticleCards
                img={item.cover_image}
                tags={item.tag_list}
                desc={item.description}
                date={item.created_at}
              />
            </div>
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

export default BlogsPage;
