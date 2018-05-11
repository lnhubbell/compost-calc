// this file contains all of the 'actions' that redux is aware of. Actions are
// basically the triggers the react app uses to alter the redux store
// (the state of the app)
import axios from 'axios';

export const QTY_HANDLER = 'QTY_HANDLER';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CANCEL_SELECT = 'CANCEL_SELECT';
export const ITEM_SELECT = 'ITEM_SELECT';
export const SEARCH_HANDLER = 'SEARCH_HANDLER';
export const ADD_ITEMS_TO_STATE = 'ADD_ITEMS_TO_STATE';
export const FETCH_ERROR = 'FETCH_ERROR';

// These 'action creators' let us perform asynchronous functions when altering
// the redux store. Typically, all reducers should be entirely synchronous, so
// these are the exception to the rule
const addItemsToState = (data) => {
    return {
        compostItems: data,
        type: ADD_ITEMS_TO_STATE
    }
}

const fetchError = (error) => {
    return {
        error: error,
        type: FETCH_ERROR
    }
}

// 'redux-thunk' gives us access to this dispatch function, which is what lets
// us run the asynchronous database call
export const fetchItems = () => {
    return (dispatch) => {
        axios.get('https://compost-calc.firebaseio.com/ingredients.json')
            .then((response) => {
                console.log(response);
                dispatch(addItemsToState(response.data));
            }).catch(error => {
                console.error('There has been an error, good luck!');
                dispatch(fetchError(error))
            });
    }
};
