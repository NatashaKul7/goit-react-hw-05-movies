import styled from 'styled-components';

export const StyledLoadMore = styled.button`
  min-width: 150px;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #000080;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  font-size: inherit;
  cursor: pointer;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff00ff;
    transform: scale(1.1);
  }
`;
