import React from 'react';

import classes from './EmptyPile.css';



const emptyPile = (props) => (
  <div className={classes.EmptyPile}>
      <p>There's nothing here! Add some compost items to get started. Watch your carbon to nitrogen ratio as you build your pile. The closer you get to 30, the faster your compost will turn back into dirt!</p>
  </div>
);

export default emptyPile;
