import React, { useState } from 'react';

// Define resetFormData outside the component
const resetFormData = {
  name: '',
  director: '',
  genre: '',
  releaseDate: '',
  studio: '',
  duration: '',
  synopsis: '',
  language: '',
  price: '',
  discount: '',
  image: '',
};

const MovieForm = () => {
  const [formData, setFormData] = useState(resetFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get existing movies from localStorage
    let existingMovies = JSON.parse(localStorage.getItem('formData')) || [];
    if (Array.isArray(existingMovies)) {
      existingMovies.push(formData);
    } else {
      existingMovies = [];
    }

    // Save updated movies array to localStorage
    try {
      localStorage.setItem('formData', JSON.stringify(existingMovies));
      console.log('Movies saved to localStorage:', existingMovies);
    } catch (error) {
      console.error('Error saving movies data to localStorage:', error);
    }

    // Reset form fields
    setFormData(resetFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      {['name', 'director', 'genre', 'releaseDate', 'studio', 'duration', 'synopsis', 'language', 'price', 'discount', 'image'].map(field => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
            {field.replace(/([A-Z])/g, ' $1')}
          </label>
          <input
            type="text"
            name={field}
            id={field}
            value={formData[field]}
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Upload Data
      </button>
    </form>
  );
};

export default MovieForm;