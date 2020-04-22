import React from 'react';
import {Text, View} from "react-native";

export interface EventProps {
  name: string;
  date: string;
  rsvps: string;
}

const Event: React.FC<EventProps> = (props: EventProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.date}</Text>
      <Text>{props.rsvps}</Text>
    </View>
  );
};

export default Event;
