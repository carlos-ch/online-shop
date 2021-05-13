import React from 'react';
import './Layout.scss';
import { NavLink } from 'react-router-dom';
import Footer from './footer/Footer';
import Logo from './logo/Logo';

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
      </nav>
      <main className="main-section">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
