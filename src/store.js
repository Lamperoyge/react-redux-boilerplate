import {createStore, applyMiddleware} from 'redux';
import rootReducer from './core/reducers/index';
import thunk from 'redux-thunk';


export const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}; 
