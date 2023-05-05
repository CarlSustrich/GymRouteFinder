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

const RouteDisplay = (routeList) : JSX.Element => {
  return(
    routeList.list.map((route) => (
    <View key={route.name}>
      <Text>{route.name} - {route.grade}</Text>
      <Text>{route.location}</Text>
    </View>
    ))
  );
}

export default RouteDisplay

// const styles = StyleSheet.create({
//   body: {
//     // flex: 1,
//     // height: '30%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%',
//     resizeMode: "contain"
//   }
// });
