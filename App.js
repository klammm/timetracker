import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { calculateHours } from './src/utils/calculateHours'

export default function App() {
  const [time, setTime] = useState(new Date());
  const [history, setHistory] = useState([]);
  const [isTimeInEnabled, setTimeInEnabled] = useState(true);
  const [hours, setHours] = useState(0);

  const onChange = (e, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  }

  const onPress = (e) => {
    const newHistory = [...history];

    if (isTimeInEnabled) {
      newHistory.push({ in: time, out: null });
    } else {
      newHistory[newHistory.length - 1].out = time;
    }

    setHistory(newHistory)
  }

  const checkHours = (e) => {
    const hourAmount = calculateHours(history);
    setHours(hourAmount);
  }

  const toggleTimeInEnabled = () => setTimeInEnabled(previousState => !previousState);

  console.log('history', history);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Switch
        value={isTimeInEnabled}
        onValueChange={toggleTimeInEnabled}
      />
      <Text>{isTimeInEnabled ? "Submit your Time IN" : "Submit your Time OUT"}</Text>
      <View>
        <Text>Pick your time here!</Text>
        <DateTimePicker
          mode="time"
          onChange={onChange}
          value={time}
          display="clock"
        />
      </View>
      <Button
        title="Submit time"
        onPress={onPress}
      />
      {history.map(item => (<Text>{`In: ${item.in} - Out: ${item.out}`}</Text>))}
      <Button
        title="Check your hours"
        onPress={checkHours}
      />
      <Text>{hours}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
