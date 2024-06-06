import React, { useState } from 'react';
import axios from 'axios';
import { FaGlobeAsia } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import config from '../config';
const categories = ['WORLD', 'NATION', 'BUSINESS', 'TECHNOLOGY', 'ENTERTAINMENT', 'SPORTS', 'SCIENCE', 'HEALTH'];

function Navbar({ darkMode, setDarkMode, setNews, setError, setLoading }) {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`${config.news_api}/api/news`, {
                params: { topic: 'search', query, quantity: 5 },
            });
            setNews(response.data);
            setError('');
        } catch (error) {
            setError('Failed to fetch news');
        }
        setLoading(false); // End loading
    };

    const handleCategoryClick = async (category) => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get(`${config.news_api}/api/news`, {
                params: { topic: category, quantity: 5 },
            });
            setNews(response.data);
            setError('');
        } catch (error) {
            setError('Failed to fetch news');
        }
        setLoading(false); // End loading
    };

    return (
        <div>
            <div className="flex justify-between items-center px-4 py-2 bg-primary-dark">
                <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-3xl font-cursive">OneTouch News</span>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://manishraj.me/" className="text-white"><FaGlobeAsia style={{ fontSize: '24px' }} /></a>
                    <a href="https://www.linkedin.com/in/manishraj27" className="text-white"><FaLinkedin style={{ fontSize: '24px' }} /></a>
                    <a href="https://github.com/manishraj27" className="text-white"><FaGithubSquare style={{ fontSize: '24px' }} /></a>
                </div>
            </div>
            <nav className="bg-primary-dark p-4 flex flex-wrap justify-between items-center">
                <div className="flex space-x-4 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className="text-white hover:bg-primary-light hover:text-black rounded px-2 py-1"
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="p-2 rounded bg-white text-black"
                        />
                        <button type="submit" className="p-2 bg-secondary-dark text-white rounded">
                            Search
                        </button>
                    </form>
                    <button
                        className="text-white ml-4"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? <MdOutlineLightMode/> : <MdDarkMode/>}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
