import { TOGGLE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES: {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        default:
            return state;
    }
}

export default favoritesReducer;