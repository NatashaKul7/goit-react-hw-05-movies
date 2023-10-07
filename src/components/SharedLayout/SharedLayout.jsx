import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <li>
        <NavLink to="/movies">Movies</NavLink>
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
