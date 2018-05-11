import React from 'react';
import classes from './Pile.css';
import PileItem from './PileItem/PileItem';
import EmptyPile from './EmptyPile/EmptyPile';

const pile = (props) =>  (
    <div className={[classes.Pile, classes.MyGreen].join(' ')}>
        <table className={classes.MyGreen}>
            <thead>
                <tr>
                    <th className={classes.Qty}>Qty
                        <span className={classes.Weight}>{' ' + '(by weight)'}</span>
                    </th>
                    <th className={classes.Name}>Name</th>
                    <th className={classes.Carbon}>Carbon</th>
                    <th className={classes.Nitrogen}>Nitrogen</th>
                    <th className={classes.CarbonNitrogen}>C/N</th>
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
                            key={item.name}
                        />
                    ))
                }
            </tbody>
        </table>
        {props.pileItems.length === 0 ? <EmptyPile /> : null}
    </div>
);


export default pile;
