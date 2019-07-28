import {combineReducers} from 'redux';
import user from './Users.js';
import songs from './Songs.js';

const allReducers=combineReducers({
    users:user,
    songs:songs
})

export default allReducers;