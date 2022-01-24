import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Keyboard, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <SafeAreaView style={styles.container}>
      

      {/*tODAYS TASK*/}
      <ScrollView style={styles.scrollView}>
       {/* <View style={styles.tasksWrapper}> */}
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task  text={item}/>
                </TouchableOpacity>
              ) 
            })
          }
          {/* <Task text= {'Task 1'}/>
          <Task text = {'Task 2'}/> */}
        </View>
      </ScrollView>

      {/* Write a task section */}
      <KeyboardAvoidingView 
      behavior = {Platform.OS === "ios"?"padding":"height"}
      style ={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
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
writeTaskWrapper: {
  position: 'absolute',
  bottom: 30,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#fff',
  borderRadius: 60,
  borderColor: '#c0c0c0',
  borderWidth: 1,
  width: 250,
  
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#fff',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#c0c0c0',
  borderWidth: 1,
},
addText: {},
scrollView: {
  paddingTop: 30,
  backgroundColor: '#EBEAED',
  marginHorizontal: 20,
},
});
