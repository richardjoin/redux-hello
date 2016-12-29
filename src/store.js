import { createStore } from 'redux';
import tootReducer from './reducers';

let comments = [
  'hello1',
  'hello2'
];
const posts = [
  {
    id:1,
    title:'redux-hello'
  },
  {
    id:2,
    title:'redux-bady'
  }
]
function commentReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,action.xx]
    default:
      return state
  }
}
const defaultState = {
  comments,
  posts
}
let store = createStore(tootReducer, defaultState);

export default store;
