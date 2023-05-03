import { Text } from "react-native";
import auth from '@react-native-firebase/auth';

function Home ({navigation}) {
  const user = auth().currentUser;
  return(
    <Text>Home Screen {user?.email}</Text>
  )
}

export default Home;
