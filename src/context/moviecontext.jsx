import React, { createContext, useEffect, useState } from "react";

export const FormDataContext = createContext(); // Export FormDataContext

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      review: movie.review || [],
      id: new Date().toISOString(),
    };
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <MovieContext.Provider value={{ addMovie, movies }}>
      <FormDataContext.Provider value={{ handleSubmit: addMovie }}>
        {children}
      </FormDataContext.Provider>
    </MovieContext.Provider>
  );
};
