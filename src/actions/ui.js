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

export const handleNavigation = (openOrClose) => {
  return {
    type: UI.SET_NAVIGATION_OPEN,
    openOrClose
  }
}

export const handleInitialRenderStatus = (status) => {
  return {
    type: UI.SET_INITIAL_RENDER_STATUS,
    status
  }
}