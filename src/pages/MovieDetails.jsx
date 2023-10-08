import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import {useParams, useLocation, Link } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/movies";
  // console.log(movieId)

  useEffect(() => {
    const getMovieDetails = async id => {
      // console.log(id)
      try {
        const response = await fetchMovieDetails(id);
        setMovie(response);
        // console.log(response);
      } catch (error) {
        setError(true);
      }
    };

    getMovieDetails(movieId);

    // return () => {
    //   getMovieDetails(movieId);
    // };
  }, [movieId]);

  return (
    <>
      {/* <Link to={ backLinkHref}>Go back</Link> */}
      <MovieList movie={movie} />
      
    </>
  );
};

export default MovieDetails;
