import { Link, Outlet, useLocation } from 'react-router-dom';
import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <>
      {/* <Link to="">Go back</Link> */}
      <Link to={`${movie}`} state={{ from: location }}/>
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
