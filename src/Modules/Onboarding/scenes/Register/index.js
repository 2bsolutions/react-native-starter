import React, { useState, useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { AccessInfo, ContactInfo, PersonalInfo } from './Components';

const FLOWS = {
  PERSONAL_INFO: 'PERSONAL_INFO',
  CONTACT_INFO: 'CONTACT_INFO',
  ACCESS_INFO: 'ACCESS_INFO'
};

const Login = ({ navigation }) => {
  const [flow, setFlow] = useState(FLOWS.PERSONAL_INFO);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: flow === FLOWS.PERSONAL_INFO
    });
  }, [navigation, flow]);

  function handleSubmit() {
    alert('lol');
  }

  const RenderFlow = () => {
    switch (flow) {
      case FLOWS.PERSONAL_INFO: {
        return <PersonalInfo onNext={() => setFlow(FLOWS.CONTACT_INFO)} />;
      }
      case FLOWS.CONTACT_INFO: {
        return (
          <ContactInfo
            onBack={() => setFlow(FLOWS.PERSONAL_INFO)}
            onNext={() => setFlow(FLOWS.ACCESS_INFO)}
          />
        );
      }
      case FLOWS.ACCESS_INFO: {
        return (
          <AccessInfo onBack={() => setFlow(FLOWS.CONTACT_INFO)} onNext={() => handleSubmit} />
        );
      }
      default: {
        return <PersonalInfo onNext={() => setFlow(FLOWS.CONTACT_INFO)} />;
      }
    }
  };

  return (
    <SafeAreaView flex={1}>
      <RenderFlow />
    </SafeAreaView>
  );
};

export default Login;
