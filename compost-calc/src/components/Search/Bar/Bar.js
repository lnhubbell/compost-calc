import React from 'react';

import classes from './Bar.css';
import edit from '../../../assets/images/edit.png';

const bar = (props) => (
    <div>
        <input
            className={classes.searchInput}
            placeholder="Add compost to your pile..."
            onChange={props.changed}
            onFocus={props.changed}
            value={props.searchTerm}
        />
        <img className={classes.editImg} src={edit} alt="edit" />
    </div>
)

export default bar;
