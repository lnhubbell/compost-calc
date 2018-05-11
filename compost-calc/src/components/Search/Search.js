import React from 'react';
import Bar from './Bar/Bar';
import Dropdown from './Dropdown/Dropdown'

const search = (props) => (
  <div style={{textAlign: 'left', position: 'absolute', width: '100%'}}>
      <Bar changed={props.changed} searchTerm={props.searchTerm}/>
      <Dropdown
          options={props.options}
          select={props.select}
          cancelSelect={props.cancelSelect}
      />
  </div>
)


export default search;
