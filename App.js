import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  // const [history, setHistory] = useState([{ in: null, out: null }]);
  // const currentDate = new Date();
  // const initialState = {
  //   time: `${currentDate.getHours()} and ${currentDate.getMinutes()}`
  // }
  const [time, setTime] = useState(new Date());
  const [history, setHistory] = useState([]);

  const onChange = (e, selectedTime) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  }

  const onPress = (e) => {
    // Check most recent history to make a decision
    // 2 things can happen

    // 1: in is null. submit time to be in

    // 2: in is not null. submit time to be out.

    // 3. in is not null, out is not null. create a new object and set in to be time.

    // const mostRecentHistory = { ...history[history.length - 1] };
    //
    // if (mostRecentHistory.in && mostRecentHistory.out) {
    //   const newHistory = [...history, { in: time, out: null }];
    //   setHistory(newHistory)
    // } else if (mostRecentHistory.in && !mostRecentHistory.out) {
    //   const newHistory = [...history];
    //
    // } else {
    //
    // }

    const newHistory = [...history, time];
    setHistory(newHistory);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
      <View>
        <FlatList
          data={history}
          renderItem={(item) => <Text>{item}</Text>}
        />
      </View>
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
