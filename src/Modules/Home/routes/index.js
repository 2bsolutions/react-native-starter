import HomeScene from '~/Modules/Home/scenes/Home';
import HOME_SCREENS from './constants';

const HOME_NAVIGATION = [
  {
    name: HOME_SCREENS.HOME,
    component: HomeScene,
    key: HOME_SCREENS.HOME,
    options: { headerShown: true }
  }
];

export default HOME_NAVIGATION;
