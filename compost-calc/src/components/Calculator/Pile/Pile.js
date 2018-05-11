import React from 'react';
import classes from './Pile.css';
import PileItem from './PileItem/PileItem';

const pile = (props) =>  (
    <div className={classes.Pile}>
        <table>
            <thead>
                <tr>
                    <th className={classes.Qty}>Qty</th>
                    <th className={classes.Name}>Name</th>
                    <th className={classes.Carbon}>Carbon</th>
                    <th className={classes.Nitrogen}>Nitrogen</th>
                    <th className={classes.Remove}>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.pileItems.map((item, ind) => (
                        <PileItem
                            item={item}
                            ind={ind}
                            remove={props.remove}
                            quantityHandler={props.quantityHandler}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
);


export default pile;
