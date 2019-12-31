import { createStore as reduxCreateStore } from "redux"
import { UI } from '../actions/action-types';

const initialState = {
  splashIndex: 0,
  heroIndex: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UI.SET_SPLASH_INDEX: {
      return Object.assign({}, state, {
        splashIndex: action.splashIndex
      });
    }

    case UI.SET_HERO_INDEX: {
      return Object.assign({}, state, {
        heroIndex: action.heroIndex
      });
    }

    default: {
      return state;
    }
  }
}


const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore