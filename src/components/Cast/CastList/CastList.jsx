import CastItem from '../CastItem/CastItem';

const CastList = ({ cast }) => {
  return (
    <>
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
    </>
  );
};

export default CastList;
