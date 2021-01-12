import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Context } from '../context/TimeContext';

import CreateTime from '../components/CreateTime';
import SubmitTimeButton from '../components/SubmitTimeButton';

const CreateScreen = ({ navigation }) => {
  const { addNewTimeEntry } = useContext(Context);
  const [timeIn, setTimeIn] = useState(new Date());
  const [timeOut, setTimeOut] = useState(new Date());

  const timeEntry = {
    in: timeIn,
    out: timeOut,
    id: `${Math.random() * 999999}`
  }

  const onPress = () => {
    addNewTimeEntry(timeEntry);
    navigation.goBack();
  }

  return (
    <View>
      <Text style={styles.text}>Time Start</Text>
      <CreateTime updateTime={setTimeIn} />
      <Text style={styles.text}>Time End</Text>
      <CreateTime updateTime={setTimeOut} />
      <SubmitTimeButton onPress={onPress}/>
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