import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      

      {/*tODAYS TASK*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          <Task text= {'Task 1'}/>
          <Task text = {'Task 2'}/>
          <Task/>
          <Task/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
   
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 20,
},
});
