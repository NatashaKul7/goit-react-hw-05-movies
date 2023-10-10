import styled from 'styled-components';

export const StyledSearchMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-around;

  margin: 24px 0px;

  .movie-title {
    max-width: 300px;
  }

  .movie-img {
    min-height: 450px;
  }
`;
