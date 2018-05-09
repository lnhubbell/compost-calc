import React from 'react';
import classes from './Pile.css';

const pile = (props) => {

  const rows = props.pileItems.map((item, ind) => (
      <tr key={item.name}>
        <td>{item.qty}</td>
        <td>{item.name}</td>
        <td>{item.carbon}</td>
        <td>{item.nitrogen}</td>
        <td><button onClick={() => props.remove(ind)}>X</button></td>
      </tr>
    ))



  return (
    <div className={classes.Pile}>
      <table>
        <thead>
          <tr>
            <th>Qty</th>
            <th>Name</th>
            <th>Carbon</th>
            <th>Nitrogen</th>
            <th>Remove</th>
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
