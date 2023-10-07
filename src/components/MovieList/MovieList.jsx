import MovieItem from "./MovieItem/MovieItem"

const MovieList = ({ movie}) => {
  return (
      <>
          <MovieItem movie={ movie} />
      </>
  )
}

export default MovieList