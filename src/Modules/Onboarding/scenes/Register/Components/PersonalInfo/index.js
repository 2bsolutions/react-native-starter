import React from 'react';
import { FormControl, Input, Stack, Text, View, Container, Button } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import PageBody from '../../../../../../UI/Components/PageBody';

// import { Container } from './styles';

const PersonalInfo = ({ onNext }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function handleNextStep() {}

  return (
    <>
      <PageBody>
        <View pt={22}>
          <Text variant="title">Dados pessoais</Text>
        </View>
        <View>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Nome:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="first_name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="name-phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Nome"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Sobrenome:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="last_name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="name-phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Sobrenome"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </View>
      </PageBody>
      <View px={22}>
        <Button onPress={onNext}>Proximo</Button>
      </View>
    </>
  );
};

export default PersonalInfo;
