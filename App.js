import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import NavigationContainer from './src/Routes/index';
import { store } from '~/Redux';
import theme from '~/theme';

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer />
      </NativeBaseProvider>
    </Provider>
  );
}
