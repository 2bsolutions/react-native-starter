import React from 'react';
import { Box, Text, Center, Button, FormControl, Stack, Input } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import SocialLoginButtons from '~/Modules/Onboarding/scenes/Login/components/socialLoginButtons';
import { attemptLogin } from '../../../../Services/auth';
import { ONBOARDING_SCREENS } from '../../../../routes/constants';

// import { Container } from './styles';

const LoginForm = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  async function handleLogin(data) {
    try {
      const response = await attemptLogin({
        username: '',
        password: ''
      });
    } catch (e) {}
  }

  return (
    <>
      <Box padding={22} margin={22} marginTop={-44} backgroundColor="#fff" borderRadius={30}>
        <Center>
          <Text variant="title">Bem vindo!</Text>
          <Text variant="secondary">Faça seu login abaixo</Text>
        </Center>
        <Box>
          <FormControl isRequired>
            <Stack>
              <FormControl.Label>Login:</FormControl.Label>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    placeholder="Nome de usuario"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="name-phone-pad"
                  />
                )}
                name="username"
                defaultValue=""
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Senha:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="name-phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleLogin)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Senha"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Box>
            <Button
              onPress={() => navigation.navigate(ONBOARDING_SCREENS.PASSWORD_RECOVERY)}
              mb={3}
              variant="simpleLink"
            >
              Esqueceu sua senha
            </Button>
            <Button onPress={handleSubmit(handleLogin)}>ACESSAR</Button>
          </Box>
        </Box>
      </Box>
      <SocialLoginButtons />
      <Box mt={5} mx={22}>
        <Text fontSize={14} textAlign="center">
          {' '}
          Ainda não tem cadastro?
        </Text>
        <Button
          onPress={() => navigation.navigate(ONBOARDING_SCREENS.REGISTER)}
          variant="simpleLink"
        >
          CADASTRE-SE
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
