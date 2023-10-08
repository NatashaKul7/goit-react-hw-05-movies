import { Link, useLocation } from "react-router-dom";

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ movie }) => {
//  const location = useLocation();
  // const backLinkHref = location.state?.from ?? "/movies";

    const { id, title, poster_path, genres, overview, vote_average, release_date} = movie;

  return (
    // <Link to={`${id}`}>
    <>
      {/* <Link to={`${movie}`} state={{ from: location }}/> */}
      <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>User score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <ul>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
   {/* </Link>  */}
      </>
  )
}

export default MovieItem;