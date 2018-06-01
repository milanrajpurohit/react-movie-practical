/************************************************
 REACT AND REDUX DEPENDENT MODULES INITIALISATION
 *************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import rootReducer from './reducers/index';
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import Users from './components/Users';
import './App.css';

// Persistent Configuration
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

// Persistor Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store for Application and Persistor
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// Routing and Provide store to every component
ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/users" component={Users} />
                </div>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
)