const CastItem = ({ name, character, profile_path }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

  return (
    <li>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={name} />
      ) : (
        <img src="" alt={name} />
      )}
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
