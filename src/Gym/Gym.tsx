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

const Gym = ({navigation}) => {

  // const [targetGym, setTargetGym] = useState();
  // const [routes, setRoutes] = useState([])
  
  
  // useEffect (() => {
  //   getTargetGymById("YBcjHh6lrVbi5Exxb2rM")
  //     .catch(console.error);
  // }, [])

  // useEffect(() => {
  //   getRoutesForGym(targetGym)
  //     .catch(console.error)
  // }, [targetGym]);


  // const getTargetGymById = async (id:string) => {
  //     const g = await firestore()
  //       .collection("gyms")
  //       .doc(id)
  //       .get()
  //     const gData = await g.data() 
  //     setTargetGym(gData)
  // }
  
  // const getRoutesForGym = async (gymData) => {
  //   if (!gymData) return;
  //   const promises = gymData["RouteIds"].map(async (route:string) => {
  //     const r = await firestore().collection("routes").doc(route).get();
  //     return r.data();
  //   });
  
  //   const routeArray = await Promise.all(promises);
  //   setRoutes(routeArray);
  // };

  // let gymPic;
  // let routeList;

  // if(targetGym) {
  //   gymPic = <GymPic src={targetGym.gymMap} />
  // } else {
  //   gymPic = <Text>{'No target gym'}</Text>
  // }
  
  // if (routes.length > 0) {
  //   routeList = <RouteDisplay list={routes} />
  // } else {
  //   routeList = <Text>{'No routes'}</Text>
  // }

  return(
    <GymPic />
    )
}


// const Gym = () => {
//   const images = [
//     {
//       url:
//         'https://images.squarespace-cdn.com/content/v1/5a01fd2db1ffb6985b2a9ac5/1600886085976-J5SC3I8CMUVYXTS1OI6S/vital+level+1+climbing+map',
//     }
//   ];
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5FCFF',
//     flex: 1,
//   }
//   });
// return(
//   <SafeAreaView style={{flex: 1}}>
//   <View style={styles.container}>
//     <ImageViewer
//       imageUrls={images}
//       renderIndicator={() => null}
//     />
//   </View>
// </SafeAreaView>
// );



// }

export default Gym;
