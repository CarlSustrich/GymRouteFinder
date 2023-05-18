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
import { DataTable } from 'react-native-paper';

const RouteDisplay = (routeList) : JSX.Element => {
  return(
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Grade</DataTable.Title>
        <DataTable.Title>Location</DataTable.Title>
      </DataTable.Header>
      {routeList.list.map((route) => (
        <DataTable.Row>
          <DataTable.Cell>{route.name}</DataTable.Cell>
          <DataTable.Cell>{route.grade}</DataTable.Cell>
          <DataTable.Cell>{route.location}</DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
    )
}

export default RouteDisplay

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
