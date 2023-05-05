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

const Gym = ({navigation}) => {

  const [targetGym, setTargetGym] = useState();
  const [routes, setRoutes] = useState([])
  
  
  useEffect (() => {
    getTargetGymById("YBcjHh6lrVbi5Exxb2rM")
      .catch(console.error);
  }, [])

  useEffect(() => {
    getRoutesForGym(targetGym)
      .catch(console.error)
  }, [targetGym]);


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

  if(targetGym) {
    gymPic = <GymPic style={styles.img} src={targetGym.gymMap} />
    // <View style={styles.picBody}>
    //   <Text >{targetGym.gymName}</Text>
    //   <GymPic style={styles.img} src={targetGym.gymMap} />
    // </View>
  } else {
    gymPic = <Text>{'No target gym'}</Text>
  }
  
  if (routes.length > 0) {
    routeList = <RouteDisplay style={styles.list} list={routes} />
    // routeList = routes.map((route) => (
    //   <View key={route.name}>
    //     <Text>{route.name} - {route.grade}</Text>
    //     <Text>{route.location}</Text>
    //   </View>
    // ));
  } else {
    routeList = <Text>{'No routes'}</Text>
  }

  return(  
    <View style={styles.body}>
        {gymPic}
        {routeList}    
    </View>
  )

}

const styles = StyleSheet.create({
  // picBody: {
  //   // width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  body: {
    flexDirection: 'column',
    flex: 1,
    // height: '30%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    // resizeMode: "fill"
  },
  img: {
    marginStart: 1000,
    // padding: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // resizeMode: 'contain',
    // width: '100%',
    // height: '100%'
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  }
});

export default Gym;
