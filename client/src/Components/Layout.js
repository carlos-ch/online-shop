import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <nav>
        <ul>
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
      {children}
    </div>
  );
};

export default Layout;
