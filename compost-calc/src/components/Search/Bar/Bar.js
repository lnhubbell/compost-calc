import React from 'react';

import classes from './Bar.css';


const bar = (props) => (
      <input
          className={classes.searchInput}
          placeholder="Add compost to your pile..."
          onChange={props.changed}
          onFocus={props.changed}
          value={props.searchTerm}
      />
)

export default bar;
