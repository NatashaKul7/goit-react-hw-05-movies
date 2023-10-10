import { useLocation } from 'react-router-dom';
import { StyledLink } from './HomeMovieItem.styled';

export const HomeMovieItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <>
      {title && (
        <StyledLink to={`movies/${id}`} state={{ from: location }}>
          <h3>{title}</h3>
        </StyledLink>
      )}
    </>
  );
};
