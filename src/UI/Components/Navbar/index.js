import React from 'react';
import { Button, Icon, IconButton, View } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const Navbar = ({ title = 'Voltar', buttonTitle = 'Voltar', callback = null }) => {
  const navigation = useNavigation();

  const actionGoBack = callback || navigation.goBack;

  return (
    <View flexDirection="row" py={12}>
      <View px={17}>
        <IconButton
          onPress={actionGoBack}
          accessibilityLabel="voltar"
          accessible
          variant="solid"
          rounded={100}
          size="sm"
          icon={<Icon color="white" as={<MaterialCommunityIcons name="chevron-left" />} />}
        />
      </View>
      <View flex={1} />
      <View />
    </View>
  );
};

export default Navbar;
