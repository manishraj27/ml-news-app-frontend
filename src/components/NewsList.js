import React from 'react';
import newsdefault from "../assets/newsdefault.webp";

function NewsList({ news }) {
  return (
    <div className="flex flex-col items-center space-y-6 px-4">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="bg-white dark:bg-neutral-dark rounded-lg shadow-md p-6 w-full max-w-2xl">
            <h2 className="text-2xl font-semibold dark:text-white mb-4">{article.title}</h2>
            <img src={article.image || newsdefault} alt={article.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
            <p className="text-neutral-dark dark:text-neutral-light mb-4">{article.summary}</p>
            <p className="text-sm text-neutral-dark dark:text-neutral-light mb-4">{article.pubDate}</p>
            <p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-primary-dark font-medium">
                Read more
              </a>
            </p>
          </div>
        ))
      ) : (
        <p className="text-neutral-dark dark:text-neutral-light">No news available</p>
      )}
    </div>
  );
}

export default NewsList;
