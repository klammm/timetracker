import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import CreateTime from '../components/CreateTime';
import SubmitTimeButton from '../components/SubmitTimeButton';

const CreateScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Time Start</Text>
      <CreateTime />
      <Text style={styles.text}>Time End</Text>
      <CreateTime />
      <SubmitTimeButton />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default CreateScreen;