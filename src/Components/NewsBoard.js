import { useEffect, useState } from "react";
import { NEWS_URL, NEWS_API_KEY } from "../utils/constant";
import NewsItem from "./NewsItem";
import Image from "../assets/news.png"

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(NEWS_URL + `&category=${category}`+ NEWS_API_KEY ) 
      .then((Response) => Response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  console.log(articles);

  return (
    <div style={{backgroundColor: '#d9ead3', color: '#4a6055'}}>
      <h2 className="text-center">
        Latest <span className=" badge text-bg-success">{category.toUpperCase()} News</span>
      </h2>
      <div className="d-inline-flex p-4 m-4 align-items-center flex-wrap">
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage?news.urlToImage:Image}
            url={news.url}
            publishDate={news.publishedAt}
          />
        );
      })}
      </div>
      
    </div>
  );
};

export default NewsBoard;
