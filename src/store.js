import {createStore} from 'redux';
import allReducers from './reducers/index';
export const create_redux_store=()=>createStore(allReducers);