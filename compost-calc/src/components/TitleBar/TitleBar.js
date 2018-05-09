import React from 'react';
import classes from './TitleBar.css';

const titleBar = (props) => (
  <div className={classes.TitleBar}>
    <h1>{props.title}</h1>
  </div>
);

export default titleBar;
