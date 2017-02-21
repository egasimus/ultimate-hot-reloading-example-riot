import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialState) => {
  const store = createStore(require('./reducers'), initialState, composeWithDevTools());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
