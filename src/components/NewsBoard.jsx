import { useEffect, useState } from "react";
import { NewsItems } from "./NewsItems";
import '../App.css';

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      <div className="articles-container">
        {articles.map((news, index) => (
          <NewsItems 
            key={index} 
            title={news.title} 
            description={news.description} 
            src={news.urlToImage} 
            url={news.url} 
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
