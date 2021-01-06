import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimePicker from '@react-native-community/datetimepicker';

const CreateTime = () => {
  const [time, setTime] = useState(new Date());

  const onChange = (event, date) => {
    setTime(date)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${time.getHours()} : ${time.getMinutes()}`}</Text>
      <View style={styles.timeContainer}>
        <TimePicker 
          mode="time"
          display="compact"
          value={time}
          style={styles.timePicker}
          onChange={onChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  timePicker: {
    width: 100,
    flex: 1,
  },
  timeContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
    marginLeft: 24,
    flex: 1,
  }
});

export default CreateTime;