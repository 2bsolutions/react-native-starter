import React from 'react';
import { Box } from 'native-base';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';
import AppleButton from './AppleLoginButton';

const SocialLoginButtons = () => {
  return (
    <Box marginX={22}>
      <AppleButton />
      <FacebookButton />
      <GoogleButton />
    </Box>
  );
};

export default SocialLoginButtons;
