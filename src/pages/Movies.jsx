import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearchMovie } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) {
      return setMovies([]);
    }

    setLoading(true);
    const getSearchedMovies = async (query, page) => {
      try {
        const { results, total_pages, total_results } = await fetchSearchMovie(
          query,
          page
        );
        if (page === 1) {
          setMovies(results);
        } else {
          setMovies([...movies, ...results]);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getSearchedMovies(queryParams, page);
  }, [queryParams, page]);

  const handleQuery = query => {
    setSearchParams(query);
  };

  return (
    <>
      <SearchForm
        handleQuery={handleQuery}
        queryParams={queryParams}
        setPage={setPage}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {movies.length !== 0 && (
            <>
              <h2>Movies with "{queryParams}"</h2>
              <SearchMovies movies={movies} />
            </>
          )}
        </>
      )}
      {error && <Error />}
    </>
  );
};

export default Movies;
