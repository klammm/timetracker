import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/TimeContext';

import TimeEntry from '../components/TimeEntry';

const DATA = [
  {
    in: '5:00pm',
    out: '6:00pm',
    id: 'abc',
  },
  {
    in: '3:00am',
    out: '9:00am',
    id: 'def',
  },
  {
    in: '12:00am',
    out: '8:00pm',
    id: 'ghi',
  }
]

const HomeScreen = ({ navigation }) => {
  const { state, addNewTimeEntry } = useContext(Context);

  const onPress = () => {
    addNewTimeEntry();
    navigation.navigate('Create');
  }

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <TimeEntry time={{...item}} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Feather name="plus-square" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.sumHours}>Total Hours Accumulated: {}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  addButton: {
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'center',
  },
  sumHours: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 5,
    marginHorizontal: 5,
  }
});

export default HomeScreen;