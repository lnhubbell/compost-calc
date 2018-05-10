import React, {Component} from 'react';
import {connect} from 'react-redux'

import classes from './CompostCalculator.css';
import Search from '../../components/Search/Search';
import Advice from '../../components/Calculator/Advice/Advice';
import Ratio from '../../components/Calculator/Ratio/Ratio';
import TitleBar from '../../components/TitleBar/TitleBar';
import Pile from '../../components/Calculator/Pile/Pile';

import * as actionTypes from '../../store/actions';

class CompostCalculator extends Component {

  componentDidMount = () => {
      this.props.fetchItems();
  }

  render() {
      return (
          <div className={classes.CompostCalculator}>
              <TitleBar title="Compost Calculator"/>
              <div style={{position: 'relative', width: '100%'}}>
                  <div style={{position: 'absolute', width: '100%'}}>
                      <Search
                          options={this.props.searchItems}
                          changed={this.props.searchHandler}
                          searchTerm={this.props.searchTerm}
                          select={this.props.itemSelect}
                          cancelSelect={this.props.cancelSelect}
                      />
                  </div>
                  <br />
                  <br />
                  <Pile
                      pileItems={this.props.pileItems}
                      remove={this.props.removeItem}
                      quantityHandler={this.props.qtyHandler}
                  />
                  <Ratio cnRatio={this.props.cnRatio}/>
          </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        compostItems: state.compostItems,
        searchItems: state.searchItems,
        pileItems: state.pileItems,
        cnRatio: state.cnRatio,
        searchTerm: state.searchTerm,
        error: state.error,
        searching: state.searching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        qtyHandler: (event, ind) => dispatch(
            {type: actionTypes.QTY_HANDLER, event: event, ind: ind}),
        removeItem: (ind) => dispatch(
            {type: actionTypes.REMOVE_ITEM, ind: ind}),
        cancelSelect: () => dispatch({type: actionTypes.CANCEL_SELECT}),
        itemSelect: (newItem) => dispatch(
            {type: actionTypes.ITEM_SELECT, newItem: newItem}),
        searchHandler: (event) => dispatch(
            {type: actionTypes.SEARCH_HANDLER, event: event}),
        fetchItems: () => dispatch(actionTypes.fetchItems())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompostCalculator);
