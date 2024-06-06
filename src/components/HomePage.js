import React from 'react';
import NewsList from './NewsList';

function HomePage({ news, error }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-neutral-dark dark:text-neutral-light items-center text-2xl font-bold mb-4">News</h2>
      {error && <p className="text-red-500">{error}</p>}
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
