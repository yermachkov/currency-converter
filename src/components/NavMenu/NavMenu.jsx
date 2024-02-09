import { Link } from 'react-router-dom';
import styled from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <nav>
      <ul className={styled.navmenu}>
        <li>
          <Link to="/">Converter</Link>
        </li>
        <li>
          <Link to="date">Date</Link>
        </li>
        <li>
          <Link to="mix">Mix</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
