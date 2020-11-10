import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { msToTime } from "../utils/calculateHours";

export function TimeInput() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const timeDifference = start > 0 && end > 0 ? msToTime(end - start) : 'Submit your time-in and time-out!';

  return (
    <View>
      <Text>{timeDifference}</Text>
      <TouchableOpacity disabled={!!start} onPress={() => setStart(Date.now())}>
        <Text>{`Time-in: ${start}`}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setEnd(Date.now())}>
        <Text>{`Time-out: ${end}`}</Text>
      </TouchableOpacity>
    </View>
  )
}
