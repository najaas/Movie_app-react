// src/pages/MovieListPage.js
import React, { useContext } from 'react';
import { FormContext } from '../../context/moviecontext';
import { Link } from 'react-router-dom';


const MovieListPage = () => {
  const { movies, deleteMovie } = useContext(FormContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center absolute top-4 right-24">
            <span>Add to </span>
            <Link to="/form" className="text-black-600 hover:underline  bg-red-500 text-white py-1 px-3 rounded-md">
              Movies
            </Link>
          </div>
      <h1 className="text-3xl font-semibold mb-4">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{movie.name}</h2>
            <p className="text-gray-700 mb-2">Director: {movie.director}</p>
            <p className="text-gray-700 mb-2">Genre: {movie.genre}</p>
            <p className="text-gray-700 mb-2">Release Year: {movie.releaseDate}</p>
            <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md mt-2"
              onClick={() => deleteMovie(movie.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;
