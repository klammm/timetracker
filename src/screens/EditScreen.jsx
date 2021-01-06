import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/TimeContext';

const EditScreen = ({ route, navigation }) => {
  const { state, submitTimeEntry } = useContext(Context);

  const editTime = state.timeList.find(item => item.id === route.params.id);

  console.log('editTime', editTime);

  return (
    <View>
      <Text>Edit Screen</Text>
      {editTime && <Text>Current Edit Time: {`${editTime.in} - ${editTime.out}`}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditScreen;