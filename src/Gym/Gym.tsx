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
import GymList from './GymList';
import ZoomableImage from '../TESTING';
import Home from '../Home';
import { NavigationContainer, ThemeProvider, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import ImageViewer from 'react-native-image-zoom-viewer';

const Gym = ({navigation}) => {
  const [showList, setShowList] = useState(true);
  const [gymId, setGymId] = useState(null)
  const [targetGym, setTargetGym] = useState();
  const [routes, setRoutes] = useState([])
  
  
  useEffect (() => {
    getTargetGymById(gymId)
      .catch(console.error);
  }, [gymId])

  useEffect(() => {
    getRoutesForGym(targetGym)
      .catch(console.error)
  }, [targetGym]);

  const handleSettingTargetGym = (id) => {
    setShowList(false)
    setGymId(id);
  }


  const getTargetGymById = async (id:string) => {
    const g = await firestore()
      .collection("gyms")
      .doc(id)
      .get()
    const gData = await g.data() 
    setTargetGym(gData)
  }
  
  const getRoutesForGym = async (gymData) => {
    if (!gymData) return;
    const promises = gymData["RouteIds"].map(async (route:string) => {
      const r = await firestore().collection("routes").doc(route).get();
      return r.data();
    });
  
    const routeArray = await Promise.all(promises);
    setRoutes(routeArray);
  };

  let gymPic;
  let routeList;

  if(targetGym != undefined) {
    console.log(targetGym.gymMap);
    gymPic = <ZoomableImage src={targetGym.gymMap} />
  } else {
    gymPic = <Text>{'No target gym'}</Text>
  }
  
  if (routes.length > 0) {
    routeList = <RouteDisplay list={routes} />
  } else {
    routeList = <Text>{'No routes'}</Text>
  }

  return(
    <View style={styles.container}>
      {showList && <GymList onSelectGym={handleSettingTargetGym}/>}
      {!showList && gymPic}
      {!showList && routeList}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Gym;
