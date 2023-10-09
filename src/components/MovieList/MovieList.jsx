import { Link, Outlet } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';

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
      <Outlet />
    </>
  );
};

export default MovieList;
