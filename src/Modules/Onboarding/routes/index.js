import LoginScene from '~/Modules/Onboarding/scenes/Login';
import RegisterScene from '~/Modules/Onboarding/scenes/Register';
import PasswordRecoveryScene from '~/Modules/Onboarding/scenes/PasswordRecovery';
import ONBOARDING_SCREENS from './constants';

const ONBOARDING_NAVIGATION = [
  {
    name: ONBOARDING_SCREENS.LOGIN,
    component: LoginScene,
    key: ONBOARDING_SCREENS.LOGIN,
    options: { headerShown: false }
  },
  {
    name: ONBOARDING_SCREENS.REGISTER,
    component: RegisterScene,
    key: ONBOARDING_SCREENS.REGISTER,
    options: { headerShown: true, title: 'Cadastro' }
  },
  {
    name: ONBOARDING_SCREENS.PASSWORD_RECOVERY,
    component: PasswordRecoveryScene,
    key: ONBOARDING_SCREENS.PASSWORD_RECOVERY,
    options: { headerShown: true }
  }
];

export default ONBOARDING_NAVIGATION;
