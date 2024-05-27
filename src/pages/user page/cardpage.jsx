import React, { useState, useEffect } from 'react';

const API_KEY = '249f222afb1002186f4d88b2b5418b55';
const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(API_URL + page);
  }, [page]);

  const getMovies = async (url) => {
    const resp = await fetch(url);
    const respData = await resp.json();
    setMovies(respData.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      getMovies(API_SEARCH + searchQuery);
    }
  };

  const handlePageChange = (increment) => {
    setPage(page + increment);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center justify-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search movies..."
          className="px-3 py-2 border border-gray-300 rounded-md mr-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </form>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`${IMAGE_PATH}${movie.poster_path}`}
              alt={movie.title}
              className="movie-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://i.ebayimg.com/images/g/1EMAAMXQdGJR2-n3/s-l1600.jpg';
              }}
            />
            <div className="movie-description p-3 flex justify-between items-center">
              <h3 className="movie-title">{movie.title}</h3>
              <h3 className="movie-vote">{movie.vote_average}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <button
          onClick={() => handlePageChange(-1)}
          disabled={page === 1}
          className={`px-4 py-2 rounded-l-md ${
            page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(1)}
          className="px-4 py-2 rounded-r-md bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;