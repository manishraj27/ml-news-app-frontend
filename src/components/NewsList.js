import React from 'react';
import newsdefault from "../assets/newsdefault.webp";
function NewsList({ news }) {
  return (
    <div>
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="news-article">
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <p><a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a></p>
            <img src={article.image || newsdefault} alt={article.title} />
            <p>{article.pubDate}</p>
          </div>
        ))
      ) : (
        <p>No news available</p>
      )}
    </div>
  );
}

export default NewsList;
