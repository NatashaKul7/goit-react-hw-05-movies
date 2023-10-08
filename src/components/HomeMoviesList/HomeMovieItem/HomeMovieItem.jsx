import { Link } from 'react-router-dom';

export const HomeMovieItem = ({ id, title, poster_path }) => {
  // const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

  return (
    <div>
      <Link to={`${id}`}>{title}</Link>
      {/* <img src={ `${BASE_IMG}${poster_path}`} alt="" /> */}
    </div>
  );
};
