import { HomeMovieItem } from './HomeMovieItem/HomeMovieItem';

export const HomeMoviesList = ({ movies }) => {
  return (
    <>
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
    </>
  );
};
