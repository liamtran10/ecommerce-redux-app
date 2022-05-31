import  { ActionTypes } from '../constants/action-types';

// Creates all actions that will be carried out.
// Actions require a type (what the action is) and a payload (the data of the action)

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};