import { 
  View,
  Text, 
  StyleSheet,
  Button
 } from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import { useState } from "react";

import type { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Login: { userId: string };
};

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

function LogIn({navigation}):JSX.Element {

  // const [createToggle, setCreate] = useState(false);
  
  return(
    <View style={styles.body}>
      <Text> Log In/Create Account</Text>
      <Button title='Continue as Guest' onPress={()=>navigation.replace("Home", {names: "fish"})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default LogIn
