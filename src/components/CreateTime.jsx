import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TimePicker from '@react-native-community/datetimepicker';

import { convertDateToString } from '../utils/convertTimeString'

const CreateTime = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  console.log('time', time);

  const onChange = (event, date) => {
    setTime(date)
  }

  const timeToDisplay = convertDateToString(time)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{timeToDisplay}</Text>
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

CreateTime.defaultProps = {
  initialTime: new Date(),
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