import { Link, Outlet } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const MovieList = ({ movie }) => {
  return (
    <>
      <MovieItem movie={movie} />
      <ul>
        <li>
          <Link to="cast">
            <h3> Cast</h3>
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <h3>Reviews</h3>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieList;
