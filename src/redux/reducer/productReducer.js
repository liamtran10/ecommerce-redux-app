import  { ActionTypes } from '../constants/action-types';

// Creates all relevant reducers

// Initial state of the reducer.
const initialState = {
    products:[]
};

// Reducers require two parameters. The original/initial state, and the action that is to be passed into it.
// In this case, the action is deconstructed into its type and its payload.
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    };
};