import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';

import { TimeInput } from './src/components/TimeInput'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TimeInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
