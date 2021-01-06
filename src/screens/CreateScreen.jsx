import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CreateTime from '../components/CreateTime';

const CreateScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Time Start</Text>
      <CreateTime />
      <Text style={styles.text}>Time End</Text>
      <CreateTime />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Time</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  submitButton: {
    marginVertical: 30,
    backgroundColor: '#4885F0',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
  },
  submitButtonText: {
    color: 'white',
  }
});

export default CreateScreen;