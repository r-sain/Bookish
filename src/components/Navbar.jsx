import { NavLink, useLocation } from 'react-router-dom';
import './navbarStyles.css';
import Booklogo from '../assets/booklogo.png';
import Cart from '../assets/cart.png';

function Navbar() {
  const currentPath = window.location.pathname;
  const { pathname } = useLocation();
  const hiddenPaths = ['/', '/signup'];
  const isHiddenPath = hiddenPaths.includes(pathname);

  return (
    <div id="navbar">
      <div className="nav-left">
        <div className={`nav-left ${isHiddenPath ? 'disabled' : ''}`}>
          {' '}
          <NavLink to="/homepage">
            <span>
              <img src={Booklogo} alt="logo" id="logo" />
            </span>
            <span>Bookish </span>
          </NavLink>
        </div>
      </div>
      {!isHiddenPath && (
        <div className="nav-right">
          <nav>
            <ul>
              <li>
                <NavLink exact to="/homepage" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/books" activeClassName="active">
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/authors" activeClassName="active">
                  Authors
                </NavLink>
              </li>
              <li className="cart-link">
                <NavLink to="/cart" activeClassName="active">
                  <span>
                    <img src={Cart} alt="cart" id="cart-icon" />
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
