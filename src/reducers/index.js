import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';



export default combineReducers({
    movieR: movieReducer,
    favoriteR: favoritesReducer
})