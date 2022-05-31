import  { ActionTypes } from '../constants/action-types';

// Creates all relevant reducers

// Initial state of the reducer.
const initialState = {
    products:[{
        id: 1,
        title: "Liam",
        category: "Programmer"
    }]
};

// Reducers require two parameters. The original/initial state, and the action that is to be passed into it.
// In this case, the action is deconstructed into its type and its payload.
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    };
};