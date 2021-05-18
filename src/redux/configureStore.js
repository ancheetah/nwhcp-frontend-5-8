import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { organizationsReducer } from './organizationsReducer';
import { usersReducer } from './usersReducer';
import { mapReducer } from './mapReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            organizationsReducer,
            usersReducer,
            mapReducer
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}