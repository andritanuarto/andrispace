import { createStore as reduxCreateStore } from "redux"
import { UI } from '../actions/action-types';

export const initialState = {
  initialRender: true,
  splashIndex: 0,
  heroIndex: 0,
  navigationOpen: false
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
        heroIndex: action.heroIndex,
      });
    }

    case UI.SET_NAVIGATION_OPEN: {
      return Object.assign({}, state, {
        navigationOpen: action.openOrClose
      });
    }

    case UI.SET_INITIAL_RENDER_STATUS: {
      return Object.assign({}, state, {
        initialRender: action.status
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
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore;