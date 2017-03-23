// Fake require to trigger reload
require('../index.html')
/* eslint-env browser */

const riot = require('riot')
const store = require('./configureStore')(window.initialStoreData)
if (module.hot) module.hot.accept('./components/App', init);
init();

function init () {
  return riot.mount('app', require('./components/App'),
    { store
    , browser: true
    , server:  window.__INITIAL_STATE__} ) }
