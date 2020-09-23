import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const Input = () => {
  const [timeIn, setTimeIn] = useState('0:00');
  const [timeOut, setTimeOut] = useState('0:00');

  return (
    <View>
      <DateTimePicker
        mode="time"
        onChange={setTimeIn}
        value={timeIn}
      />
      <DateTimePicker
        mode="time"
        onChange={setTimeOut}
        value={timeOut}
      />
    </View>
  )
}

export default Input;
