import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import Onboarding from '~/Modules/Onboarding/routes';
import Home from '~/Modules/Home/routes';
import { colors } from '~/theme';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const session = useSelector(store => store.session);

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
        {session.isLogged ? (
          <Stack.Group>
            {Home.map(screen => (
              <Stack.Screen {...screen} />
            ))}
          </Stack.Group>
        ) : (
          <Stack.Group>
            {Onboarding.map(screen => (
              <Stack.Screen {...screen} />
            ))}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
