import * as actionTypes from './actions';

const initialState = {
    compostItems: [],
    searchItems: [],
    pileItems: [],
    cnRatio: 0,
    searchTerm: '',
    error: false,
    searching: false
}


const reducer = (state=initialState, action) => {
    switch ( action.type ) {
        case actionTypes.QTY_HANDLER:
            return quantityHandler(state, action);
        case actionTypes.REMOVE_ITEM:
            return removeItem(state, action);
        case actionTypes.CANCEL_SELECT:
            return cancelSelect(state, action);
        case actionTypes.ITEM_SELECT:
            return itemSelect(state, action);
        case actionTypes.SEARCH_HANDLER:
            return searchHandler(state, action);
        case actionTypes.ADD_ITEMS_TO_STATE:
            return addItemsToState(state, action);
        case actionTypes.FETCH_ERROR:
            return fetchError(state, action);
        }

    // default state pass through if we get an unrecognized actionType
    return state;
}


// vvv reducer funcs vvv

const searchHandler = (state, action) => {
  const term = action.value;
  const newSearchItems = [];
  for (const compost of state.compostItems) {
    // we want items that match the search term and havent already been selected
    if (
        (compost.name.toLowerCase().includes(term.toLowerCase()) || term==='')
        && !alreadySelected(state, compost)
    ) {
      newSearchItems.push({...compost});
    };
  }
  return {
      ...state,
      searchTerm: term,
      searchItems: newSearchItems,
      searching: true
  };
}


const quantityHandler = (state, action) => {
    const newPileItems = [...state.pileItems]
    const newPileItem = {...newPileItems[action.ind]}
    newPileItem.qty = action.value;
    newPileItems[action.ind] = newPileItem;
    const newRatio = updatedRatio(newPileItems);
    return {
        ...state,
        cnRatio: newRatio,
        pileItems: newPileItems
    }
}

const removeItem = (state, action) => {
    const newPileItems = [];
    for (const compost of state.pileItems) {
        newPileItems.push({...compost});
    }
    newPileItems.splice(action.index, 1);
    const newRatio = updatedRatio(newPileItems);
    return {
        ...state,
        cnRatio: newRatio,
        pileItems: newPileItems
    }
}

const cancelSelect = (state, action) => {
    return {
        ...state,
        searchTerm: '',
        searchItems: [],
        searching: false
    }
}


const itemSelect = (state, action) => {
    const newPileItems = [];
    for (const compost of state.pileItems) {
        newPileItems.push({...compost});
    }
    newPileItems.push({...action.newItem});
    const newRatio = updatedRatio(newPileItems);
    return {
        ...state,
        cnRatio: newRatio,
        searchTerm: '',
        pileItems: newPileItems,
        searchItems: [],
        searching: false
    }
}


const addItemsToState = (state, action) => {
    return {
        ...state,
        compostItems: action.compostItems
    }
}

const fetchError = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}


// vvv Convenience Funcs vvv

const alreadySelected = (state, newCompost) => {
  for (const compost of state.pileItems) {
    if (compost.name === newCompost.name) {
      return true;
    };
  }
  return false;
}

const updatedRatio = (newPileItems) => {
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
  return newRatio;
}






export default reducer;
