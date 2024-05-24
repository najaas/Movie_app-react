import React, { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => {
    try {
      const savedMovies = localStorage.getItem('formData');
      console.log(savedMovies,"undo");
      return savedMovies ? JSON.parse(savedMovies) : [];
    } catch (error) {
      console.error('Error loading movies from localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('movies', JSON.stringify(movies));
    } catch (error) {
      console.error('Error saving movies to localStorage:', error);
    }
  }, [movies]);

  return (
    <FormContext.Provider value={{ movies, setMovies }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
