import styled from 'styled-components';

export const StyledMovieItem = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 24px;
  margin-top: 24px;

  .movie-details {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .span-text {
    font-size: inherit;
    font-weight: 400;
  }
`;
