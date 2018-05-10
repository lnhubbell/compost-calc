import React from 'react';
import classes from './Pile.css';

const pile = (props) => {

    const rows = props.pileItems.map((item, ind) => {
        const bgColor = item.carbon/item.nitrogen > 30 ? {backgroundColor: '#A08C7B'} : {};

        return (
            <tr key={item.name} style={bgColor}>
                <td><input value={item.qty} onChange={(event) => props.quantityHandler(event, ind)}/></td>
                <td>{item.name}</td>
                <td>{item.carbon}</td>
                <td>{item.nitrogen}</td>
                <td><button onClick={() => props.remove(ind)}>X</button></td>
            </tr>
        )
    }
    )



  return (
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
                {rows}
            </tbody>
        </table>
    </div>
      )
      };

      export default pile;
