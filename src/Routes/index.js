import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '~/Modules/Onboarding/routes';
import { colors } from '~/theme';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Voltar',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold'
          },
          headerTintColor: '#999',
          headerStyle: {
            backgroundColor: '#efefef',
            borderBottom: 0
          }
        }}
      >
        <Stack.Group>
          {Onboarding.map(screen => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Stack.Screen {...screen} />
          ))}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
