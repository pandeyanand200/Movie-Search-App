import React from 'react'

import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const API_KEY = 'f9c03f4f';
const API_URL = 'http://www.omdbapi.com/';

function App() {
  const [query, setQuery]     = useState('');
  const [movies, setMovies]   = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const searchMovies = async () => {
    if (!query.trim()) return; // empty search nahi chalega

    try {
      setLoading(true);
      setError(null);
      setMovies([]);

      const res = await axios.get(API_URL, {
        params: {
          apikey: API_KEY,
          s: query,      // s = search
          type: 'movie', // sirf movies
        },
      });

      if (res.data.Response === 'True') {
        setMovies(res.data.Search);
      } else {
        setError('Koi movie nahi mili — doosra naam try karo!');
      }
    } catch (err) {
      setError('Kuch galat hua — internet check karo!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={searchMovies}
      />

      {loading && <p className="loading">Movies dhundh rahe hain...</p>}
      {error   && <p className="error">{error}</p>}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default App;