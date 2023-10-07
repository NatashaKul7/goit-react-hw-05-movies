const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

const MovieItem = ({ movie }) => {
    const { title, poster_path, genres, overview, popularity, vote_average, release_date} = movie;

  return (
      <>
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
          <p>{ popularity}</p>
      
      </>
  )
}

export default MovieItem;