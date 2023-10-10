import { Link, useLocation } from 'react-router-dom';
import { StyledSearchMovies } from './SearchMovies.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const SearchMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <StyledSearchMovies>
      {movies.map(({ title, id, poster_path }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {poster_path ? (
              <>
                <img
                  className="movie-img"
                  src={`${BASE_IMG}${poster_path}`}
                  alt={title}
                />
                <h3 className="movie-title">{title}</h3>
              </>
            ) : (
              <img src="" alt={title} width="300" height="450px" />
            )}
          </Link>
        </li>
      ))}
    </StyledSearchMovies>
  );
};

export default SearchMovies;
