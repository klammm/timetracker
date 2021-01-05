import React, { useContext } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/TimeContext';

const TimeEntry = ({ navigation, time }) => {
  const { state, editTimeEntry } = useContext(Context);

  const onPress = () => {
    editTimeEntry(time)
    navigation.navigate('Edit');
  }

  return (
    <TouchableOpacity style={styles.entry} onPress={onPress}>
      <Text style={styles.text}>{`${time.in} - ${time.out}`}</Text>
      <Feather style={styles.icon} name="edit" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  entry: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
  },
  icon: {}
});

export default TimeEntry;