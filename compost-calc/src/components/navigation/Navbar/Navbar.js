import React from 'react';
import classes from './Navbar.css';

import Logo from '../../Logo/Logo';



const navbar = (props) => (
  <header className={classes.Navbar}>
      <div className={classes.Logo}>
          <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
          <span>Home</span>
          <span>About</span>
      </nav>
  </header>
);

export default navbar;
