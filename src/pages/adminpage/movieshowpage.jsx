import React, { useContext } from 'react';
import { FormContext } from '../../context/moviecontext';

const MovieListPage = () => {
  const { movies } = useContext(FormContext);
console.log(movies,"undooooolli");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Movie List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {movies.map((movie, index) => ( */}
          <div  className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">{movies.name}</h2>
            <p className="text-gray-700 mb-2">Director: {movies.director}</p>
            <p className="text-gray-700 mb-2">Genre: {movies.genre}</p>
            <p className="text-gray-700 mb-2">Release Year: {movies.releaseDate}</p>
            <p className="text-gray-700 mb-2">Rating: {movies.rating}</p>
          </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default MovieListPage;
