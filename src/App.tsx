/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { useEffect, useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LogIn from './Account/LogIn';
import Account from './Account/Account';
import LogOut from './Account/LogOut';
import Gym from './Gym/Gym';
import Home from './Home';
import ZoomableImage from './TESTING';
import { NavigationContainer, ThemeProvider, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ImageViewer from 'react-native-image-zoom-viewer';

type SectionProps = PropsWithChildren<{title: string;}>;

function App(): JSX.Element {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();


  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


  if (initializing)  null;

  if (!user) {
    return (
        <Account />
    );
  }

  return (
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Gym" component={Gym} />
        <Tab.Screen name="Logout" component={LogOut} />
        <Tab.Screen name="Zoom" component={ZoomableImage} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
