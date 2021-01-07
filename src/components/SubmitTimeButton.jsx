import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const SubmitTimeButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitButtonText}>Submit Time</Text>
    </TouchableOpacity>
  )
}

SubmitTimeButton.defaultProps = {
  onPress: () => {}
}

const styles = StyleSheet.create({
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
})

export default SubmitTimeButton;