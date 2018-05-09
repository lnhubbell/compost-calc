import React, {Component} from 'react';
import classes from './CompostCalculator.css';

import TitleBar from '../../components/TitleBar/TitleBar';
import CompostSearch from '../../components/CompostSearch/CompostSearch'
import Pile from '../../components/Calculator/Pile/Pile'
import Ratio from '../../components/Calculator/Ratio/Ratio'
import Advice from '../../components/Calculator/Advice/Advice'


class CompostCalculator extends Component {
  state = {
    compostItems: [
      {name: 'Leaves', carbon: 2, nitrogen: 5, qty: 1},
      {name: 'Coffee', carbon: 10, nitrogen: 1, qty: 1},
      {name: 'Newspaper', carbon: 30, nitrogen: 2, qty: 1},
      {name: 'Bodies', carbon: 50, nitrogen: 1, qty: 1},
      {name: 'Fruit', carbon: 1, nitrogen: 10, qty: 1},
    ],
    searchItems: [],
    pileItems: [],
    cnRatio: 0,
    suggestions: '',
    searchNames: ['Leaves', 'Newspaper', 'Bodies', 'Fruit'],
    initialValue: '',
    searchTerm: '',
  }

  searchHandler = (event) => {
    const term = event.target.value;
    const newSearchItems = [];
    for (const compost of this.state.compostItems) {
      if ((compost.name.toLowerCase().includes(term.toLowerCase()) || term==='') && !this.alreadySelected(compost)) {
        newSearchItems.push({...compost});
      };
    }
    this.setState({searchTerm: term, searchItems: newSearchItems});
  }

  alreadySelected = (newCompost) => {
    for (const compost of this.state.pileItems) {
      if (compost.name === newCompost.name) {
        return true;
      };
    }
    return false;
  }

  compostSelect = (newCompost) => {
    const newPileItems = [];
    for (const compost of this.state.pileItems) {
      newPileItems.push({...compost});
    }
    newPileItems.push({...newCompost});
    this.setState({searchTerm: '', pileItems: newPileItems, searchItems: []})
    this.updateRatio(newPileItems);
  }

  updateRatio = (newPileItems) => {
    let carbonTotal = 0.0;
    let nitrogenTotal = 0.0;
    let newRatio = 0;
    if (newPileItems.length > 0) {
      for (const compost of newPileItems) {
        carbonTotal += compost.carbon;
        nitrogenTotal += compost.nitrogen;
      }
      newRatio = carbonTotal/nitrogenTotal;
    } 
    this.setState({cnRatio: newRatio});
  }

  removeItem = (index) => {
    const newPileItems = [];
    for (const compost of this.state.pileItems) {
      newPileItems.push({...compost});
    }
    newPileItems.splice(index, 1);
    this.setState({pileItems: newPileItems});
    this.updateRatio(newPileItems);
  }

  render() {
    return (
      <React.Fragment>
        <TitleBar title="Compost Calculator"/>
        <CompostSearch
          options={this.state.searchItems}
          changed={this.searchHandler}
          searchTerm={this.state.searchTerm}
          select={this.compostSelect}

        />
        <Pile
          pileItems={this.state.pileItems}
          remove={this.removeItem}
        />
        <Ratio cnRatio={this.state.cnRatio}/>
        <Advice suggestions={this.state.suggestions}/>
      </React.Fragment>
    )
  }
}

export default CompostCalculator;
