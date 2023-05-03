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

  // const gym = firestore()
  //   .collection('Gyms')
  //   .doc("YBcjHh6lrVbi5Exxb2rM")
  //   .get()
  //   .then(docSnapshot => {
  //     if (docSnapshot.exists) {
  //       const data = docSnapshot.data()
  //       console.log(data)
  //     } else {
  //       console.log('not found')
  //     }
  //   })
  
  // async function getTargetGymById(id: string) {
  //   let targetGymRef;
  //   try {targetGymRef = await firestore().collection("gyms").doc("YBcjHh6lrVbi5Exxb2rM").get()}
  //   catch(e){console.log(e)}
    
  
  //   if (targetGymRef) {
  //     const targetGymData = targetGymRef.data();
  //     console.log('Target gym data: ', targetGymData);
  //   } else {
  //     console.log('No matching gym found');
  //   }
  // }

  useEffect (() => {
    const getTargetGymById = async (id:string) => {
      const g = await firestore()
      .collection("gyms")
      .doc(id)
      .get()
      const gData = await g.data() 
      setTargetGym(gData)
    }
    getTargetGymById("YBcjHh6lrVbi5Exxb2rM")
      .catch(console.error);
    console.log(targetGym)
  }, [])

  // async function getTargetGymById(id: string) {
  //   try {
  //     const g = await firestore()
  //     .collection("gyms")
  //     .doc(id)
  //     .get()
  //     const gData = await g.data()
  //     await setTargetGym(gData)
  //     console.log(gData)
  //   } catch(e) {
  //     console.log(e)
  //   } 
  //   // console.log(targetGym)
  // }

 
  let visibleState;
  if(targetGym) {
    visibleState = <Text>{targetGym.gymName}</Text>
  } else {
    visibleState = <Text>{'No target gym'}</Text>
  }
    
    

  return(  
    <View>
      <Text>Gym page</Text>
      {visibleState}
    </View>
  )


}

export default Gym;
