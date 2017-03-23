const initial =
  { counter: 5 }

const handlers =
  { INC(s) { return { counter: s.counter + 1 } } };

module.exports = function reducer (state = initial, action) {
  return handlers[action.type] ? handlers[action.type](state) : state }
