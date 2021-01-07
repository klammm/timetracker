import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/TimeContext';
import { convertDateToString } from '../utils/convertTimeString'

import CreateTime from '../components/CreateTime';
import SubmitTimeButton from '../components/SubmitTimeButton';

const EditScreen = ({ route, navigation }) => {
  const { state, submitTimeEntry } = useContext(Context);

  const editTime = state.timeList.find(item => item.id === route.params.id);

  const timeIn = convertDateToString(editTime.in)
  const timeOut = convertDateToString(editTime.out)

  console.log('editTime', editTime.out);

  return (
    <View>
      <Text style={styles.text}>Time Start</Text>
      <CreateTime initialTime={editTime.in} />
      <Text style={styles.text}>Time End</Text>
      <CreateTime initialTime={editTime.out} />
      <SubmitTimeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  }
});

export default EditScreen;