import React from 'react';
import compost from '../../assets/images/compost.png';

import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img className={classes.Compost} src={compost} alt="Compost"/>
    </div>
    )

export default logo;
