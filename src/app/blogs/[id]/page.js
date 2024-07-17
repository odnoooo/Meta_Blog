"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns"; // Add this line to import format function

const BlogPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await res.json();

        setArticle(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  if (!article) return <>Loading...</>;
  const formattedDate = format(new Date(article.created_at), "MM/dd/yyyy");
  return (
    <div>
      <div className="lg:w-[800px] m-auto flex flex-col gap-8">
        <div>
          <div className="flex flex-col gap-8" key={article.id}>
            <h1 className="text-4xl font-semibold">{article.title}</h1>
            <div className="flex gap-4 text-gray-500 text-sm items-center">
              <img
                className="h-7 flex rounded-full"
                src={article.user.profile_image}
                alt={article.user.name}
              />
              <p>{article.user.name}</p>
              <p>{formattedDate}</p>
            </div>

            <img src={article.cover_image} alt={article.title} />
            <p>{article.description}</p>
            <div
              className="flex flex-col gap-6 [&>p]:text-xl   [&>h2]:text-2xl [&>h2]:font-bold text-gray-800 "
              dangerouslySetInnerHTML={{ __html: article.body_html }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
