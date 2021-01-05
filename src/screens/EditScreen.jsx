import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Context } from '../context/TimeContext';

const EditScreen = () => {
  const { state, submitTimeEntry } = useContext(Context);

  console.log('state', state);

  return (
    <View>
      <Text>Edit Screen</Text>
      {state.currentTimeEntryEdit && <Text>Current Edit Time: {`${state.currentTimeEntryEdit.in} - ${state.currentTimeEntryEdit.out}`}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});

export default EditScreen;