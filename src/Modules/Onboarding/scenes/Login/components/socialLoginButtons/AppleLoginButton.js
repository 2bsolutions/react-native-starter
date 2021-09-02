import { Button, Icon } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const AppleButton = () => {
  return (
    <Button
      size="xs"
      variant="apple"
      startIcon={<Icon as={<MaterialCommunityIcons name="apple" />} size={6} color="white" />}
    >
      Login com Apple
    </Button>
  );
};

export default AppleButton;
