import { Outlet } from 'react-router-dom';
import NavMenu from '../../components/NavMenu/NavMenu';
import styled from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2024</footer>
    </>
  );
};

export default Layout;
