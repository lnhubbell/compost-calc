import React from 'react';

import classes from './Dropdown.css';
import Backdrop from '../../Backdrop/Backdrop';

const dropdown = (props) => (
    <React.Fragment>
        <Backdrop
            show={props.options.length !== 0}
            clicked={props.cancelSelect}
        />
        {
                props.options.length !== 0
                    ?
                        <ul className={classes.searchList}>
                            {props.options.map((compost) => (
                                <li
                                    key={compost.name}
                                    onClick={() => props.select(compost)}
                                >
                                    {compost.name + ': '}
                                    {compost.carbon}/{compost.nitrogen}
                                </li>
                            ))}
                        </ul>
                    :
                null
        }
    </React.Fragment>
)

export default dropdown;
