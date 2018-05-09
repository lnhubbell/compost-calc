import React, { Component } from 'react';
import classes from './App.css';
import CompostCalculator from './containers/CompostCalculator/CompostCalculator';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <CompostCalculator />
      </div>
    );
  }
}

export default App;
