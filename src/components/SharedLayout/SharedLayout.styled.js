import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  &.active {
    color: #ff00ff;
  }
`;
export const StyledHeader = styled.header`
  nav {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
`;
