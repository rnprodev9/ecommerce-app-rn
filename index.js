/** @format */

import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleWare from 'redux-saga'
import {name as appName} from './app.json'

import rootReducer from './src/reducers'
import rootSaga from './src/sagas'
import 'react-native-async-storage-dev-menu-item'

const sagaMiddleWare = createSagaMiddleWare()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
sagaMiddleWare.run(rootSaga)

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response) => {
        return response;
    });
};

AppRegistry.registerComponent(appName, () => RootApp)
