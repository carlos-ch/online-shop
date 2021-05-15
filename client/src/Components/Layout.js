import React, { useContext } from 'react';
import './Layout.scss';
import { NavLink } from 'react-router-dom';
import Footer from './footer/Footer';
import Logo from './logo/Logo';
import { CartContext } from '../contexts/CartContext';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'products',
    path: '/products',
  },
  {
    name: 'cart',
    path: '/cart',
  },
];

const Layout = ({ children }) => {
  const [contextValue, setContext] = useContext(CartContext);
  return (
    <div>
      <nav className="navbar">
        <Logo />
        <ul className="navbar-links">
          {links.map((link, index) => (
            <NavLink
              exact
              key={link.name + index}
              to={link.path}
              activeClassName="selected"
            >
              <li>{link.name}</li>
            </NavLink>
          ))}
        </ul>
        {contextValue.length > 0 && (
          <div className="notification-badge">
            <span>{contextValue.length}</span>
          </div>
        )}
      </nav>
      <main className="main-section">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
