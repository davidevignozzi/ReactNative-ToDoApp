import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  // add a new task
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  // add a new task pressing enter

  // on click delete the task
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Title for Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksSectionTitle}>Today's tasks</Text>

        <ScrollView style={styles.items} showsVerticalScrollIndicator={false}>
          {/* --------------------------------------------------------------------------- Where the magic appens */}
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>

      </View>
      

      {/* Add a task section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
        style={styles.input}
        returnKeyType = 'done' 
        placeholder={'Write a task'}
        value={task} 
        onChangeText={text => setTask(text)}
        onSubmitEditing={() => handleAddTask()}
       />

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  tasksSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    height: '75%',
    borderRadius: 15,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});
