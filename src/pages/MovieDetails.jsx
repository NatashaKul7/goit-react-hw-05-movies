import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { StyledButton } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async id => {
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
      <StyledButton to={backLinkLocationRef.current}>Go back</StyledButton>

      {loading ? <Loader /> : <MovieList movie={movie} />}
      {error && <Error />}
    </>
  );
};

export default MovieDetails;
