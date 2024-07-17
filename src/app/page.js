"use client";

import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Trending } from "../components/Trending";
import { AllBlogPost } from "../components/AllBlogPost";
import { useEffect, useState } from "react";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");

  const articles = await res.json();

  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full m-auto px-4  lg:m-auto">
      <div className=" m-auto flex flex-col gap-20 text-current lg:w-[1216px]">
        <Main articles={articles} />
        <Trending articles={articles} />
        <AllBlogPost articles={articles} />
      </div>
      <div className="w-screen bg-gray-100"></div>
    </div>
  );
}
