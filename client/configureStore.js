import rootReducer from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import router from './router/middleware';

const { api, thunk, log } = require('./middleware');

module.exports = function configureStore(initialState, debug = false) {

  const createStoreWithMiddleware = applyMiddleware(thunk, api, router);

  const finalCreateStore =
    debug
    ? compose(
        createStoreWithMiddleware,
        applyMiddleware(createLogger({ collapsed: true, duration: true })))
          (createStore)
    : createStoreWithMiddleware(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;

}
