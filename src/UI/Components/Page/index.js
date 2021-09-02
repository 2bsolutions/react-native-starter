import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Container } from './styles';

const Page = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Page;
