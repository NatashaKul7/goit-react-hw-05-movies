import { Link, useLocation } from 'react-router-dom';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const SearchMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img src={`${BASE_IMG}${poster_path}`} alt={title} />
              {title && title.substring(0, 18)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchMovies;
