const reduxPack = require('redux-pack');
const types = require('../types');

const initialState = {
  inputValue: 0,
  isLoading: false,
  error: null,
  response: null,
};

module.exports = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_RESPONSE_FROM_API:
      return reduxPack.handle(state, action, {
        start: s => Object.assign({}, s, { isLoading: true, error: null, response: null }),
        finish: s => Object.assign({}, s, { isLoading: false }),
        failure: s => Object.assign({}, s, { error: payload }),
        success: s => Object.assign({}, s, { response: payload }),
      });

    case types.CHANGE_INPUT_VALUE:
      return Object.assign({}, state, { inputValue: action.inputValue });

    default:
      return state;
  }
};
