import { createStore } from 'redux';

let comments = [
  'hello1',
  'hello2'
];
function commentReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,action.xx]
    default:
      return state
  }
}
let store = createStore(commentReducer, comments);

export default store;
