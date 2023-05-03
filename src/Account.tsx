import React from 'react';
import { Button, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LogIn from './LogIn';
import CreateAccount from './CreateAccount';

const Account = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default Account
