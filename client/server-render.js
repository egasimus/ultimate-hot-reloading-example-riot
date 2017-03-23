var riot = require('riot');

import App from './components/App';
import configureStore from './store';
import fs from 'fs';

// eslint-disable-next-line no-sync
const template = fs.readFileSync(__dirname + '/../index.html', 'utf8');

module.exports = function renderApp (path, callback) {
  const store = configureStore();
  const state = store.getState();
  const rendered = riot.render(App, { store: store });
  const page = template
    .replace('<!-- CONTENT -->', rendered)
    .replace('"-- STORES --"', JSON.stringify(state));
  callback(null, page);
}
