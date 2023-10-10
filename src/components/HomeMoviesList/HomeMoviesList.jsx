import { HomeMovieItem } from './HomeMovieItem/HomeMovieItem';
import { StyledHomeMoviesList } from './HomeMoviesList.styled';

export const HomeMoviesList = ({ movies }) => {
  return (
    <StyledHomeMoviesList>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <HomeMovieItem
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
          ></HomeMovieItem>
        );
      })}
    </StyledHomeMoviesList>
  );
};
