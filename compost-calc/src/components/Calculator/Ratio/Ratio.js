import React from 'react';
import classes from './Ratio.css';

const ratio = (props) => (
  <div className={classes.Ratio}>
    Your current Carbon to Nitrogen (C/N) ratio is: {props.cnRatio.toFixed(2)}
  </div>
);

export default ratio;
