import * as React from 'react';
import { useEffect, useState, createContext } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
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
import Account from '../Account/Account';
import GymPic from './GymPic';
import RouteDisplay from './GymRoutes';
import Home from '../Home';
import { NavigationContainer, ThemeProvider, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import ImageViewer from 'react-native-image-zoom-viewer';

const GymList = (route) => {
  const [gymList, setGymList] = useState();

  useEffect(() => {
    getGymList();
  }, []);

  const getGymList = async () => {
    const gymListSnapshot = await firestore().collection('gyms').get();
    const gyms = gymListSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setGymList(gyms);
  };

  const setSelectedGym = (e) => {
    route['onSelectGym'](e.target["_internalFiberInstanceHandleDEV"]["_debugOwner"]['key'])

  }

  return (
    <>
      {gymList &&
        gymList.map(gym => (
          <Text style={styles.body} key={gym.id} onPress={setSelectedGym}>{gym.gymName}</Text>
          )
        )
      }
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10
  }
});

export default GymList;
