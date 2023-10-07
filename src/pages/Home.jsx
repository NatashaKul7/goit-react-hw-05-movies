import { HomeMoviesList } from 'components/HomeMoviesList/HomeMoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getTrendsMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error.message)
        setError(true);
      }
    };

    getTrendsMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <HomeMoviesList movies={movies} />
    </>
  );
};

export default Home;
