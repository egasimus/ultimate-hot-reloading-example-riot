const initial =
  { counter: 5 }

const handlers =
  { INC(s) { return { counter: s.counter + 1 } } };

module.exports = function reducer (state = initial, action) {
  if (handlers[action.type]) return handlers[action.type](state);
  return state;
}
