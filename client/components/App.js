import { mapKeys, keys, assign } from 'lodash/object';
import { createComponent } from '../utils';

module.exports = createComponent('app', `
  <div>
    <h1>Demo!</h1>
    <p>{counter}</p>
    <button class="increment" onclick="{increment}">+1</button>
    <p><a href="/whoami">Server-only route</a></p>
  </div>

  <style>
    body, app {
      display: block;
      padding: 10px;
      background: #111;
    }
    body, a {
      color: #df9;
    }
    app .increment {
      padding: 10px;
      color: white;
      cursor: pointer;
      border: 5px solid green;:w
      border-radius: 3px;
      background-color: green;
    }
  </style>
`,

{ mapStateToProps: (state) => ({ counter: state.counter, })

, init: function (opts) {
    this.increment = () => { this.store.dispatch({ type: "INC" }) }
  }

});

