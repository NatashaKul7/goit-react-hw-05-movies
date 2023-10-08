import { NavLink, Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
      </ul>
      <li>
        <StyledLink to="/movies">Movies</StyledLink>
          </li>
          </nav>
        </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
