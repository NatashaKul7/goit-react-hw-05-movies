import { StyledCastListItem } from './CastItem.styled';

const CastItem = ({ name, character, profile_path }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

  return (
    <StyledCastListItem>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={name} />
      ) : (
        <img src="" alt={name} width="200" height="300px" />
      )}
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </StyledCastListItem>
  );
};

export default CastItem;
