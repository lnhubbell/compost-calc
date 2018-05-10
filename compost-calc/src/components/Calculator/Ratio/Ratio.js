import React from 'react';
import classes from './Ratio.css';

const ratio = (props) => (
    <React.Fragment>
        <div className={classes.Ratio}>
            Your Carbon to Nitrogen ratio is: {props.cnRatio.toFixed(2)}
        </div>
        <div className={classes.Ideal}>The ideal ratio is <strong>30</strong></div>
    </React.Fragment>
);

export default ratio;
