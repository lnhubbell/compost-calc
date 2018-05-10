import React, { Component } from 'react';
import classes from './App.css';
import CompostCalculator from './containers/CompostCalculator/CompostCalculator';
import Navbar from './components/navigation/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Navbar />
          <CompostCalculator />
      </div>
    );
  }
}

export default App;
