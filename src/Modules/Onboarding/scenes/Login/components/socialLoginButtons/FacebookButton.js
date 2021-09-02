import { Button, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const FacebookButton = () => {
  return (
    <Button
      size="xs"
      variant="facebook"
      startIcon={<Icon as={<MaterialCommunityIcons name="facebook" />} size={6} color="white" />}
    >
      Login com Facebook
    </Button>
  );
};

export default FacebookButton;
