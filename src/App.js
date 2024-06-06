import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';


function App() {
  const [topic, setTopic] = useState('--Select--');
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  const topics = ['--Select--', 'Trending🔥 News', 'Favourite💙 Topics', 'Search🔍 Topic'];
  const categories = ['WORLD', 'NATION', 'BUSINESS', 'TECHNOLOGY', 'ENTERTAINMENT', 'SPORTS', 'SCIENCE', 'HEALTH'];

  const fetchNews = async (selectedTopic, query = '') => {
    try {
      const response = await axios.get(`http://localhost:8080/api/news`, {
        params: {
          topic: selectedTopic,
          query: query,
          quantity: 5,
        },
      });
      setNews(response.data);
      setError('');
    } catch (error) {
      setError('Failed to fetch news');
    }
  };

  const handleTopicChange = (e) => {
    const selectedTopic = e.target.value;
    setTopic(selectedTopic);
    setCategory('');
    setNews([]);
    if (selectedTopic === 'Trending🔥 News') {
      fetchNews('top');
    }
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    if (selectedCategory) {
      fetchNews(selectedCategory);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (topic === 'Search🔍 Topic' && query) {
      fetchNews('search', query);
    }
  };

  return (
    <div className="App">
      <h1>News App</h1>
      <select value={topic} onChange={handleTopicChange}>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
      {topic === 'Favourite💙 Topics' && (
        <select value={category} onChange={handleCategoryChange}>
          <option value="">--Select Category--</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      )}
      {topic === 'Search🔍 Topic' && (
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topic..."
          />
          <button type="submit">Search</button>
        </form>
      )}
      {error && <p>{error}</p>}
      <NewsList news={news} />
    </div>
  );
}

export default App;
