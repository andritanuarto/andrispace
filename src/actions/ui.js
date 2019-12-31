import { UI } from './action-types';

export const handleSplash = (splashIndex) => {
  return {
    type: UI.SET_SPLASH_INDEX,
    splashIndex
  }
}

export const handleHeroIndex = (heroIndex) => {
  return {
    type: UI.SET_HERO_INDEX,
    heroIndex
  }
}