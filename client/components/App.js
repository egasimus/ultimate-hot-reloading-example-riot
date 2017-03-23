//import AppHeader from '../components/AppHeader';
//import LinkTo from '../components/LinkTo';
//import TodosBox, { TodosItem } from '../components/Todos';
//import CounterExample from '../components/CounterExample';
//import CheckMark from '../components/CheckMark';
//import StateSidebar from '../components/StateSidebar';

import { mapKeys, keys, assign } from 'lodash/object';
import { createComponent } from '../utils';
//import { changeRoute } from '../router/actions';

module.exports = createComponent('app', `
  <div>
    <h1>Demo!</h1>
    <p>{counter}</p>
    <button class="increment" onclick="{increment}">+1</button>
    <p><a href="/whoami">Server-only route</a></p>
  </div>
  <style>
    app {
      display: block;
      padding: 10px;
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

{

  mapStateToProps: (state) => ({
    counter: state.counter,
    router: state.router,
    //programId: (state.router.params) && state.router.params.programId || null,
  }),

  init: function (opts) {

    this.gotoUtopia = () => {
      //this.store.dispatch(changeRoute('program', { programId: 'killallhumans' }));
    }

    this.increment = () => {
      console.log("INCREMENT!", this)
      this.store.dispatch({ type: "INC" })
    }

  },

});

