import CastItem from '../CastItem/CastItem';
import { StyledCastList } from './CastList.styled';

const CastList = ({ cast }) => {
  return (
    <StyledCastList>
      {cast &&
        cast.map(({ id, name, character, profile_path }) => {
          return (
            <CastItem
              key={id}
              name={name}
              character={character}
              profile_path={profile_path}
            />
          );
        })}
    </StyledCastList>
  );
};

export default CastList;
