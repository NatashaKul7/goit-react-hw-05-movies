import { StyledMovieItem } from './MovieItem.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ movie }) => {
  const { title, poster_path, genres, overview, vote_average, release_date } =
    movie;

  return (
    <StyledMovieItem>
      <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <h4>
          Release date: <span className="span-text">{release_date}</span>
        </h4>
        <h4>
          User score: <span className="span-text">{vote_average}</span>
        </h4>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul className="genres-list">
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
    </StyledMovieItem>
  );
};

export default MovieItem;
