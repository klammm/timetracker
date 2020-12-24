import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/TimeContext';

const HomeScreen = () => {
  const { state, addTimeEntry } = useContext(Context);

  console.log(addTimeEntry);
  console.log(state);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;