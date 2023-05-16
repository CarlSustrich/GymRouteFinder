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



// const GymList = () => {

//   const [gymList, setGymList] = useState()

//   useEffect (() => {
//     getGymList()
//   }, [])

//   const getGymList = async () => {
//     const gymList = await firestore().collection('gyms').get();
//     setGymList(gymList);
//   }

//   return(
//     <>
//     {gymList && 
//       gymList.forEach(element => {
//         console.log(element.data()['gymName']);
//         <Text>{element.data()['gymName']}</Text>
//       })
//     }
//     </>
//   )
// }

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
    console.log(e.target)
    route['onSelectGym'](e.target.key)

  }
  // const getGymList = async () => {
  //   const gymList = await firestore().collection('gyms').get();
  //   setGymList(gymList.docs.map(doc => doc.data()));
  // };

  return (
    <>
      {gymList &&
        gymList.map(gym => (
          <Text key={gym.id} onPress={setSelectedGym}>{gym.gymName}</Text>
          )
        )
      }
    </>
  );
};



export default GymList;



{"_children": [225], "_internalFiberInstanceHandleDEV": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": {"_debugHookTypes": [Array], "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.47370901703834534, "actualStartTime": 215646364.574129, "alternate": [FiberNode], "child": [FiberNode], "childLanes": 0, "deletions": null, "dependencies": [Object], "elementType": [Object], "flags": 8388609, "index": 0, "key": "YBcjHh6lrVbi5Exxb2rM", "lanes": 0, "memoizedProps": [Object], "memoizedState": [Object], "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 0.36512500047683716, "sibling": [FiberNode], "stateNode": null, "subtreeFlags": 4, "tag": 11, "treeBaseDuration": 0.43504297733306885, "type": [Object], "updateQueue": [Object]}, "_debugSource": undefined, "actualDuration": 0.07575002312660217, "actualStartTime": 215646364.969171, "alternate": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.023125022649765015, "actualStartTime": 215644631.444878, "alternate": [Circular], "child": [FiberNode], "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "RCTText", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 0.009708017110824585, "sibling": null, "stateNode": [Circular], "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.013875007629394531, "type": "RCTText", "updateQueue": null}, "child": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": null, "_debugSource": null, "actualDuration": 0.006750017404556274, "actualStartTime": 215646365.013129, "alternate": [FiberNode], "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": null, "flags": 0, "index": 0, "key": null, "lanes": 0, "memoizedProps": "Portland Rock Gym", "memoizedState": null, "mode": 2, "pendingProps": "Portland Rock Gym", "ref": null, "return": [Circular], "selfBaseDuration": 0.004166990518569946, "sibling": null, "stateNode": 225, "subtreeFlags": 0, "tag": 6, "treeBaseDuration": 0.004166990518569946, "type": null, "updateQueue": null}, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "RCTText", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": {"accessibilityLabel": undefined, "accessibilityRole": undefined, "accessibilityState": [Object], "accessible": true, "allowFontScaling": true, "children": "Portland Rock Gym", "disabled": undefined, "ellipsizeMode": "tail", "isHighlighted": true, "nativeID": undefined, "numberOfLines": undefined, "onClick": [Function onClick], "onResponderGrant": [Function onResponderGrant], "onResponderMove": [Function onResponderMove], "onResponderRelease": [Function onResponderRelease], "onResponderTerminate": [Function onResponderTerminate], "onResponderTerminationRequest": [Function onResponderTerminationRequest], "onStartShouldSetResponder": [Function onStartShouldSetResponder], "selectable": undefined, "selectionColor": null, "style": undefined}, "memoizedState": null, "mode": 2, "pendingProps": {"accessibilityLabel": undefined, "accessibilityRole": undefined, "accessibilityState": [Object], "accessible": true, "allowFontScaling": true, "children": "Portland Rock Gym", "disabled": undefined, "ellipsizeMode": "tail", "isHighlighted": true, "nativeID": undefined, "numberOfLines": undefined, "onClick": [Function onClick], "onResponderGrant": [Function onResponderGrant], "onResponderMove": [Function onResponderMove], "onResponderRelease": [Function onResponderRelease], "onResponderTerminate": [Function onResponderTerminate], "onResponderTerminationRequest": [Function onResponderTerminationRequest], "onStartShouldSetResponder": [Function onStartShouldSetResponder], "selectable": undefined, "selectionColor": null, "style": undefined}, "ref": null, "return": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.10608401894569397, "actualStartTime": 215646364.943379, "alternate": [FiberNode], "child": [Circular], "childLanes": 0, "deletions": null, "dependencies": null, "elementType": [Object], "flags": 0, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 0.02420899271965027, "sibling": null, "stateNode": null, "subtreeFlags": 4, "tag": 10, "treeBaseDuration": 0.06991797685623169, "type": [Object], "updateQueue": null}, "selfBaseDuration": 0.041541993618011475, "sibling": null, "stateNode": [Circular], "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.04570898413658142, "type": "RCTText", "updateQueue": null}, "_nativeTag": 227, "viewConfig": {"Commands": {}, "bubblingEventTypes": {"topChange": [Object], "topPointerCancel": [Object], "topPointerDown": [Object], "topPointerEnter": [Object], "topPointerLeave": [Object], "topPointerMove": [Object], "topPointerOut": [Object], "topPointerOver": [Object], "topPointerUp": [Object], "topSelect": [Object], "topTouchCancel": [Object], "topTouchEnd": [Object], "topTouchMove": [Object], "topTouchStart": [Object]}, "directEventTypes": {"onGestureHandlerEvent": [Object], "onGestureHandlerStateChange": [Object], "topAccessibilityAction": [Object], "topClick": [Object], "topContentSizeChange": [Object], "topInlineViewLayout": [Object], "topLayout": [Object], "topLoadingError": [Object], "topLoadingFinish": [Object], "topLoadingStart": [Object], "topMessage": [Object], "topMomentumScrollBegin": [Object], "topMomentumScrollEnd": [Object], "topScroll": [Object], "topScrollBeginDrag": [Object], "topScrollEndDrag": [Object], "topSelectionChange": [Object], "topTextLayout": [Object]}, "uiViewClassName": "RCTText", "validAttributes": {"accessibilityActions": true, "accessibilityCollection": true, "accessibilityCollectionItem": true, "accessibilityHint": true, "accessibilityLabel": true, "accessibilityLabelledBy": true, "accessibilityLiveRegion": true, "accessibilityRole": true, "accessibilityState": true, "accessibilityValue": true, "adjustsFontSizeToFit": true, "alignContent": true, "alignItems": true, "alignSelf": true, "allowFontScaling": true, "android_hyphenationFrequency": true, "aspectRatio": true, "backgroundColor": [Object], "borderBottomWidth": true, "borderEndWidth": true, "borderLeftWidth": true, "borderRightWidth": true, "borderStartWidth": true, "borderTopWidth": true, "borderWidth": true, "bottom": true, "collapsable": true, "columnGap": true, "dataDetectorType": true, "disabled": true, "display": true, "dynamicTypeRamp": true, "elevation": true, "ellipsizeMode": true, "end": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexShrink": true, "flexWrap": true, "gap": true, "height": true, "importantForAccessibility": true, "isHighlighted": true, "isPressable": true, "justifyContent": true, "left": true, "lineBreakStrategyIOS": true, "margin": true, "marginBottom": true, "marginEnd": true, "marginHorizontal": true, "marginLeft": true, "marginRight": true, "marginStart": true, "marginTop": true, "marginVertical": true, "maxFontSizeMultiplier": true, "maxHeight": true, "maxWidth": true, "minHeight": true, "minWidth": true, "minimumFontScale": true, "nativeID": true, "numberOfLines": true, "onInlineViewLayout": true, "onLayout": true, "onMoveShouldSetResponder": true, "onMoveShouldSetResponderCapture": true, "onPointerEnter": true, "onPointerEnterCapture": true, "onPointerLeave": true, "onPointerLeaveCapture": true, "onPointerMove": true, "onPointerMoveCapture": true, "onPointerOut": true, "onPointerOutCapture": true, "onPointerOver": true, "onPointerOverCapture": true, "onResponderEnd": true, "onResponderGrant": true, "onResponderMove": true, "onResponderReject": true, "onResponderRelease": true, "onResponderStart": true, "onResponderTerminate": true, "onResponderTerminationRequest": true, "onShouldBlockNativeResponder": true, "onStartShouldSetResponder": true, "onStartShouldSetResponderCapture": true, "onTextLayout": true, "onTouchCancel": true, "onTouchEnd": true, "onTouchMove": true, "onTouchStart": true, "opacity": true, "overflow": true, "padding": true, "paddingBottom": true, "paddingEnd": true, "paddingHorizontal": true, "paddingLeft": true, "paddingRight": true, "paddingStart": true, "paddingTop": true, "paddingVertical": true, "position": true, "renderToHardwareTextureAndroid": true, "right": true, "rotation": true, "rowGap": true, "scaleX": true, "scaleY": true, "selectable": true, "selectionColor": true, "shadowColor": [Object], "start": true, "style": [Object], "testID": true, "textBreakStrategy": true, "top": true, "transform": true, "translateX": true, "translateY": true, "width": true, "zIndex": true}}}
