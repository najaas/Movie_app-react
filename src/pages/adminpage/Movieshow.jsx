// // App.js
// import React, { useState, useEffect } from 'react';
// import MovieList from './Movieshowpage';

// const App = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     Fetch movie data or load from local storage
//     const savedMovies = localStorage.getItem('formData');
//     if (savedMovies) {
//       setMovies(JSON.parse(savedMovies));
//     }
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Movie List</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// };

// export default App;
