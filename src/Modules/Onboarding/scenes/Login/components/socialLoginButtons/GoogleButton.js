import { Button, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const GoogleButton = () => {
  return (
    <Button
      size="xs"
      variant="google"
      startIcon={<Icon as={<MaterialCommunityIcons name="google" />} size={6} color="black" />}
    >
      Login com Google
    </Button>
  );
};

export default GoogleButton;
