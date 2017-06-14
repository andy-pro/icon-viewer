// @flow
import { applyMiddleware, createStore, compose } from 'redux';
// import { persistStore, autoRehydrate } from 'redux-persist';

import configureMiddleware from './middleware';
import configureReducer from './reducer';
// import configureStorage from './storage';
// import __config from '../config'

const configureStore = options => {
  const { initialState, platformDeps = {}, platformMiddleware = [] } = options;

  const reducer = configureReducer(initialState);

  const middleware = configureMiddleware(
    initialState,
    platformDeps,
    platformMiddleware
  );

  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  /*
  if (platformDeps.storageEngine) {
    persistStore(store, configureStorage(
      __config.appName,
      platformDeps.storageEngine,
    ))
  }

  // Enable hot reloading for reducers.
  if (module.hot && typeof module.hot.accept === 'function') {
    if (__config.isNative) {
      // React Native for some reason needs accept without the explicit path.
      // facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html
      module.hot.accept(() => {
        const configureReducer = require('./reducer').default;
        store.replaceReducer(configureReducer(initialState));
      });
    } else {
      // Webpack for some reason needs accept with the explicit path.
      module.hot.accept('./reducer', () => {
        const configureReducer = require('./reducer').default;
        store.replaceReducer(configureReducer(initialState));
      });
    }
  }
*/

  return store;
};

export default configureStore;
