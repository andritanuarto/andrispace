import { UI } from './action-types';

export const handleSplash = (splashIndex) => {
  return {
    type: UI.SET_SPLASH_INDEX,
    splashIndex
  }
}