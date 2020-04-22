import React from 'react';
import {Text, View} from "react-native";

export interface EventProps {
  name: string;
  description: string;
  starts_at: string;
  attendees_count: string;
}

const Event: React.FC<EventProps> = (props: EventProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.description}</Text>
      <Text>{props.starts_at}</Text>
      <Text>{props.attendees_count}</Text>
    </View>
  );
};

export default Event;
