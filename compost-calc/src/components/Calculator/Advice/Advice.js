import React from 'react';
import classes from './Advice.css';

const advice = (props) => (
  <div className={classes.Advice}>
    <p>Given your current Pile and Ratio, we would advise you add some: {props.suggestions}.</p>
  </div>
);

export default advice;
