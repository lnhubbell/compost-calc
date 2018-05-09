import React from 'react';

import classes from './CompostSearch.css';


const compostSearch = (props) => (
  <div>
    Add an ingredient to your pile:

    <input
      className={classes.searchInput}
      placeholder="Search for compost.."
      onChange={props.changed}
      onFocus={props.changed}
      value={props.searchTerm}
    />
    {props.options.length!=0 ?
      <ul className={classes.searchList}>
        {props.options.map((compost) => (
          <li key={compost.name} onClick={() => props.select(compost)}>{compost.name}</li>
        ))}
      </ul>
    :
      null
      
    }

  </div>
)

export default compostSearch;
