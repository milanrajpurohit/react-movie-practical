/*****************************
 REDUCER DEFINATION FOR REDUX
 ******************************/
import storage from 'redux-persist/lib/storage';
import { persistReducer }from 'redux-persist';

// Initial State
const initialState = {
    loggedInUser: {},
    token: "",
    users: [],
    movies: []
}

// Pure Reducer Function
const adminReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'MOVIES':
            return state;
        case 'USERS':
            return state;
        case 'LOGGED_IN_USER':
            return {...state, loggedInUser: action.loggedinuser };
        case 'TOKEN':
            return {...state, token: action.token };

        default:
            return state;
    }

}

// Persist Configuration
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: []
}

export default persistReducer(persistConfig, adminReducer);

