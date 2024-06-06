import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/loader/Loader';
import axios from 'axios';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [quantity, setQuantity] = useState(5); // Add quantity state

  useEffect(() => {
    const fetchTrendingNews = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get('http://localhost:8080/api/news', {
          params: { topic: 'top', quantity: quantity },
        });
        setNews(response.data);
        setError('');
      } catch (error) {
        setError('Failed to fetch news');
      }
      setLoading(false); // End loading
    };

    fetchTrendingNews();
  }, [quantity]); // Fetch news when quantity changes

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-background-light dark:bg-background-dark flex flex-col min-h-screen">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setNews={setNews}
          setError={setError}
          setLoading={setLoading} // Pass setLoading to Navbar
          setQuantity={setQuantity} // Pass setQuantity to Navbar
        />
        <div className="flex-grow flex items-center justify-center">
          {loading ? <Loader /> : <HomePage news={news} error={error} />}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
