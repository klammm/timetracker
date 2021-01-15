import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/TimeContext';
import { convertDateToString } from '../utils/convertTimeString'

import CreateTime from '../components/CreateTime';
import SubmitTimeButton from '../components/SubmitTimeButton';

const EditScreen = ({ route, navigation }) => {
  const { state, submitEditTimeEntry } = useContext(Context);
  const id = route.params.id;
  const editTime = state.timeList.find(item => item.id === id);
  const [timeIn, setTimeIn] = useState(editTime.in);
  const [timeOut, setTimeOut] = useState(editTime.out);

  const timeEntry = {
    in: timeIn,
    out: timeOut,
    id
  };

  const onPress = () => {
    submitEditTimeEntry(timeEntry, id);
    navigation.goBack();
  }

  return (
    <View>
      <Text style={styles.text}>Time Start</Text>
      <CreateTime initialTime={editTime.in} updateTime={setTimeIn} />
      <Text style={styles.text}>Time End</Text>
      <CreateTime initialTime={editTime.out} updateTime={setTimeOut} />
      <SubmitTimeButton onPress={onPress} />
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