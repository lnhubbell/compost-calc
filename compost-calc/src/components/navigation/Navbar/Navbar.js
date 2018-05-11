import React from 'react';

import classes from './Navbar.css';
import Logo from '../../Logo/Logo';


const navbar = (props) => (
  <header className={classes.Navbar}>
      <div className={classes.Logo}>
          <Logo />
      </div>
  </header>
);

export default navbar;
