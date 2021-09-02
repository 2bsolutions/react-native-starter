import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Center, Box } from 'native-base';
import { useSelector } from 'react-redux';
import Page from '../../../../UI/Components/Page';
import LoginForm from './components/LoginForm';
import { colors } from '../../../../theme';

import { Container, Logo } from './styles';

const Login = () => {
  const session = useSelector(state => state.session);
  const insets = useSafeAreaInsets();

  return (
    <Page backgroundColor={colors.amber}>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1}>
          <Center>
            <Logo resizeMode="contain" source={require('~/Assets/images/logo.png')} />
          </Center>
        </Box>
        <Box
          backgroundColor="#eee"
          marginBottom={-insets.bottom}
          paddingBottom={insets.bottom}
          borderTopRadius={30}
        >
          <LoginForm />
        </Box>
      </Container>
    </Page>
  );
};

export default Login;
