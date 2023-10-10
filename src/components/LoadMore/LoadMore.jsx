import { StyledLoadMore } from './LoadMore.styled';

export const Button = ({ onClick }) => {
  return (
    <StyledLoadMore type="submit" onClick={() => onClick()}>
      Load more
    </StyledLoadMore>
  );
};
