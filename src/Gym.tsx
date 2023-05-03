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

import LogIn from './LogIn';
import Account from './Account';
import LogOut from './LogOut';
import Home from './Home';
import { NavigationContainer, ThemeProvider, useNavigation, useRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const Gym = ({navigation, route="YBcjHh6lrVbi5Exxb2rM"}) => {

  const [targetGym, setTargetGym] = useState();
  const [routes, setRoutes] = useState([])
  
  
  useEffect (() => {
    getTargetGymById("YBcjHh6lrVbi5Exxb2rM")
      .catch(console.error);
    // getRoutesForGym()
    //   .catch(console.error)
  }, [])

  useEffect(() => {
    // console.log(targetGym)
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
      // await getRoutesForGym(gData)
  }

  const getRoutesForGym = async(gymData) => {
    if (!gymData) return;
    let routeArray = []
    gymData['RouteIds'].forEach(async function(route) {
      const r = await firestore()
        .collection("routes")
        .doc(route)
        .get();
      const rData = await r.data()
      await routeArray.push(rData)
      console.log("inside")
      console.log(routeArray)
    });
    console.log("outside")
    console.log(routeArray)
    setRoutes(routeArray)
  }

  let gymPic;
  let routeList;

  if(targetGym) {
    gymPic = 
    <View>
      <Text>{targetGym.gymName}</Text>
      <Image 
        style={{width: '90%', height: '90%'}}
        source={{uri: targetGym.gymMap}} />
    </View>
  } else {
    gymPic = <Text>{'No target gym'}</Text>
  }

  if(routes.length >0) {
    console.log("greater than 0")
    console.log(routes)
    routeList =
    <Text>{routes[0]['name']} - {routes[0]['grade']}</Text>
      // <View>
      //   {routes.map((route, index) => {<Text key={index}>{route.name} - {route.grade}</Text>
          
      //   })}
      // </View>
  } else {
    console.log('noroutes')
    routeList = <Text>{'No routes'}</Text>
  }
    
    

  return(  
    <View>
      {gymPic}
      {routeList}
    </View>
  )


}

export default Gym;
