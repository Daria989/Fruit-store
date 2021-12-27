import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import basketReducer from './reducers/basket';

export default configureStore({
    reducer: {
        counter: counterReducer,
        basket: basketReducer
    }
});