import React, { useState, useEffect } from 'react';
import photo from '../../assets/Banner/banner4.jpg';

const MovieCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const key = '2fb7569a';
  const defaultTitle = 'dead+poets+society';
  const url = `https://www.omdbapi.com/?apikey=${key}&t=`;

  useEffect(() => {
    const fetchMovie = async (title) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url + title);
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        setError('Failed to fetch movie data');
      } finally {
        setLoading(false);
      }
    };

    fetchMovie(defaultTitle);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      fetchMovie(searchQuery);
    }
  };

  const renderMovieData = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!movieData) {
      return null;
    }

    const { Title, Poster, Rated, Year, Genre, Plot, Writer, Director, Actors } = movieData;
    const actorList = Actors.split(',');

    return (
      <div className="movie__details flex-1 p-6 md:p-12">
        <h1 className="movie__title font-heading text-2xl font-bold">{Title}</h1>
        <ul className="movie__tags list--inline">
          <li className="movie__rated inline-block mr-3">{Rated}</li>
          <li className="movie__year inline-block mr-3">{Year}</li>
          <li className="movie__year inline-block">{Genre}</li>
        </ul>
        <p className="movie__plot text-sm leading-5">{Plot}</p>
        <div className="movie__credits">
          <p>
            <strong>Written by:</strong> {Writer}
          </p>
          <p>
            <strong>Directed by:</strong> {Director}
          </p>
          <p>
            <strong>Starring:</strong>
          </p>
          <ul className="movie__actors list--inline">
            {actorList.map((actor) => (
              <li key={actor} className="inline-block mr-3">
                {actor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 bg-gray-100 font-body">
      <div className="movie relative overflow-hidden max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="movie__data relative flex flex-col justify-center min-h-96 md:flex-row">
          <form onSubmit={handleSubmit} className="absolute top-6 right-6 mx-auto md:max-w-xs">
            <input
              id="movie-search"
              type="text"
              placeholder="Enter a movie title"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </form>
          <div className="movie__poster relative flex w-full md:mr-3 md:w-52">
            <div className="m absolute overflow-hidden top--80p bottom--20p left--20p w-3/2 h-3/2 transform rotate-6 md:top--20p md:w-full">
              <div className="w-full h-full">
                <img
                  src={movieData?.Poster || photo}
                  alt="Movie Poster"
                  className="filter blur-sm object-cover w-full h-full transform scale-150"
                />
              </div>
            </div>
            <div className="movie__poster--featured relative self-center overflow-hidden mt-18 ml-6 w-36 bg-gray-400 rounded shadow-lg z-10 md:absolute md:left-12 md:mx-auto">
              <img
                src={movieData?.Poster || photo}
                alt="Movie Poster"
                className="w-36"
              />
            </div>
          </div>
          {renderMovieData()}
        </div>
        {!movieData && !loading && !error && (
          <div className="movie__no-results text-center">
            <h2>No results</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;