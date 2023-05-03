import { Text } from "react-native";

function Home ({navigation}) {
  const contextType = ThemeContext;
  return(
    <Text>Home Screen {this.context.user.email}</Text>
  )
}

export default Home;
