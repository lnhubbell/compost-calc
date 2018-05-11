import React from 'react';
import Bar from './Bar/Bar';
import Dropdown from './Dropdown/Dropdown'

import classes from './Search.css'

const search = (props) => (
  <div className={classes.Search}>
      <Bar changed={props.changed} searchTerm={props.searchTerm}/>
      <Dropdown
          options={props.options}
          select={props.select}
          cancelSelect={props.cancelSelect}
      />
  </div>
)


export default search;
