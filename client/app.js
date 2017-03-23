// Fake require to trigger reload
require('../index.html')
/* eslint-env browser */

const riot = require('riot')
const redux = require('redux')

const store = configureStore(window.initialStoreData)
if (module.hot) module.hot.accept(['./components', './reducers'], init)
init();

function init () {
  store.replaceReducer(require('./reducers'))
  return riot.mount('app', require('./components/App'),
    { store
    , browser: true
    , server:  window.__INITIAL_STATE__} ) }

function configureStore (initialState, debug = false) {
  let middleware = redux.applyMiddleware(
    require('./middleware').thunk,
    require('./middleware').api);

  if (debug)
    middleware = redux.compose(
      middleware,
      redux.applyMiddleware(
        require('redux-logger').createLogger(
          { collapsed: true
          , duration:  true })))

  const store = middleware(redux.createStore)(
    require('./reducers'),
    initialState)

  return store; }
