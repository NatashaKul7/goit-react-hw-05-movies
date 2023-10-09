import { Link, useLocation } from 'react-router-dom';

export const HomeMovieItem = ({ id, title, poster_path }) => {
  const location = useLocation();

  return (
    <div>
      <Link to={`${id}`} state={{ from: location }}>
        {title}
      </Link>
    </div>
  );
};
