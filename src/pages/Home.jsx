import Error from 'components/Error/Error';
import { HomeMoviesList } from 'components/HomeMoviesList/HomeMoviesList';
import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getTrendsMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        setMovies(results);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        // setError(true);
            setLoading(false);
      }
    };

    getTrendsMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading ? (<Loader />)
        : ( <HomeMoviesList movies={movies} />) }
      { error && <Error/>}
    </>
  );
};

export default Home;
