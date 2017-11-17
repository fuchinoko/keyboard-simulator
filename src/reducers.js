import { combineReducers } from "redux";
import * as actions from "./actions"
const appState = (state = 1, action) => {
  switch (action.type) {
    case actions.START_STATE:
      return 2;
    case actions.ONCE_AGAIN_STATE:
      return 3;
    default:
      return state;
  }
}
const numberOfMistakes = (state = 0, action)=>{
  switch (action.type) {
    case actions.START_STATE:
      return 0;
    case actions.MISTAKE_INDEX:
      return state + 1;
    default:
      return state;
  }
}


const currentIndex = (state = 0, action)=>{
  switch (action.type) {
    case actions.START_STATE:
      return 0;
    case actions.MISTAKE_INDEX:
    case actions.TRUE_INDEX: 
      return state + 1;     
    default:
      return state;
  }
}
const arrayWithMistakes = (state = [], action)=>{
  switch (action.type) {
    case actions.START_STATE:
      return [];
    case actions.MISTAKE_INDEX: 
      return [...state, action.index]
    default:
      return state;
  }
}
const arrayWithTrue = (state = [], action)=>{
  switch (action.type) {
    case actions.START_STATE:
      return [];
    case actions.TRUE_INDEX: 
      return [...state, action.index]
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  appState,
  numberOfMistakes,
  currentIndex,
  arrayWithMistakes,
  arrayWithTrue
});
export default rootReducer

