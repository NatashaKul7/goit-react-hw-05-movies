import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm/SearchForm';
import { fetchSearchMovie } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import { scrollToBottom } from 'utils/scroll';
import { Button } from 'components/LoadMore/LoadMore';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
   const [loadMore, setLoadMore] = useState(false);

  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) {
        setLoadMore(false)
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
          setLoadMore(total_pages < Math.ceil(total_results / 16))
        } else {
          setMovies([...movies, ...results]);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoadMore(false)
      }
    };

    getSearchedMovies(queryParams, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams, page]);

  const handleQuery = query => {
    setSearchParams(query);
  };

  const onLoadMore = () => { 
 setPage(prevPage => prevPage + 1);
    scrollToBottom();

  }

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
      {loadMore && <Button onClick={onLoadMore} />}
    </>
  );
};

export default Movies;
