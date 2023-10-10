import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <nav>
            <li>
              <StyledLink to="/">
                <h2>Home</h2>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">
                <h2>Movies</h2>
              </StyledLink>
            </li>
          </nav>
        </nav>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
