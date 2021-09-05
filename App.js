import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>

      {/* Title for Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.tasksSectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* Where the magic appens */}
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>

      </View>
      

      {/* Add a task section */}
      

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
  },
});
