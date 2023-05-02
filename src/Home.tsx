import { Text } from "react-native";

function Home ({navigation, route} : {navigation: any, route: {params: {names: string}}}) {
  return(
    <Text>Home Screen, {route.params.names}</Text>
  )
}

export default Home;
