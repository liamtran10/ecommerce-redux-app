import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducer/index";

// createStore is deprecated. configureStore is the new thing!
const store = configureStore({reducer: reducers});
export default store;