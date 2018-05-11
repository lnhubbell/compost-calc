import React from 'react';
import classes from './Ratio.css';

const ratio = (props) => {

    const advice = props.cnRatio > 30 ? 'greens' : 'browns';
    return (
        <React.Fragment>
            <div className={classes.Ratio}>
                Your Carbon to Nitrogen ratio is: {props.cnRatio.toFixed(2) || 0}
            </div>
            <div className={classes.Ideal}>
                The ideal ratio is <strong>30</strong>.
                You should add more <strong>{advice}</strong>.
            </div>
        </React.Fragment>
    )
};

export default ratio;
