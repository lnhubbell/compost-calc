import React, {Component} from 'react';
import classes from './CompostCalculator.css';

import Search from '../../components/Search/Search';
import Advice from '../../components/Calculator/Advice/Advice';
import Ratio from '../../components/Calculator/Ratio/Ratio';
import TitleBar from '../../components/TitleBar/TitleBar';
import Pile from '../../components/Calculator/Pile/Pile';

import axios from 'axios';

class CompostCalculator extends Component {
  state = {
    compostItems: [],
    searchItems: [],
    pileItems: [],
    cnRatio: 0,
    suggestions: '',
    initialValue: '',
    searchTerm: '',
    error: false,
    searching: false
  }

  componentDidMount = () => {
      axios.get('https://compost-calc.firebaseio.com/ingredients.json')
          .then((response) => {
              console.log(response);
              this.setState({compostItems: response.data});
          }).catch(error => {
              this.setState({error:true});
          });
  }

  searchHandler = (event) => {
    const term = event.target.value;
    const newSearchItems = [];
    for (const compost of this.state.compostItems) {
      if ((compost.name.toLowerCase().includes(term.toLowerCase()) || term==='') && !this.alreadySelected(compost)) {
        newSearchItems.push({...compost});
      };
    }
    this.setState({searchTerm: term, searchItems: newSearchItems, searching: true});
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
    this.setState({searchTerm: '', pileItems: newPileItems, searchItems: [], searching: false})
    this.updateRatio(newPileItems);
  }

  cancelSelect = () => {
      this.setState({searchTerm: '', searchItems: [], searching: false})
  }

  updateRatio = (newPileItems) => {
    let carbonTotal = 0.0;
    let nitrogenTotal = 0.0;
    let newRatio = 0;
    if (newPileItems.length > 0) {
      for (const compost of newPileItems) {
        carbonTotal += (compost.carbon*compost.qty);
        nitrogenTotal += (compost.nitrogen*compost.qty);
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


  quantityHandler = (event, ind) => {
      const newPileItems = [...this.state.pileItems]
      const newPileItem = {...newPileItems[ind]}
      newPileItem.qty = event.target.value;
      newPileItems[ind] = newPileItem;
      this.setState({pileItems: newPileItems});
      this.updateRatio(newPileItems);

  }

  render() {
      return (
          <div className={classes.CompostCalculator}>
              <TitleBar title="Compost Calculator"/>
              <div style={{position: 'relative', width: '100%'}}>
                  <div style={{position: 'absolute', width: '100%'}}>
                      <Search
                          options={this.state.searchItems}
                          changed={this.searchHandler}
                          searchTerm={this.state.searchTerm}
                          select={this.compostSelect}
                          cancelSelect={this.cancelSelect}
                      />
                  </div>
                  <br />
                  <br />
                  <Pile
                      pileItems={this.state.pileItems}
                      remove={this.removeItem}
                      quantityHandler={this.quantityHandler}
                  />
                  <Ratio cnRatio={this.state.cnRatio}/>
          </div>
      </div>
    )
  }
}

export default CompostCalculator;
