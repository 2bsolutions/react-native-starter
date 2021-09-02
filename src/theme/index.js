import { extendTheme } from 'native-base';
import colors from './colors';
import components from './components';

const theme = extendTheme({
  colors,
  components,
  config: {
    initialColorMode: 'light'
  }
});

export { colors };

export default theme;
