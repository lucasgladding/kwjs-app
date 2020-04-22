import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export interface EventProps {
  name: string;
  date: string;
  rsvps: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontSize: 20,
  },
  date: {

  },
  rsvps: {
    color: '#888',
  },
});

const Event: React.FC<EventProps> = (props: EventProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.rsvps}>{props.rsvps}</Text>
    </View>
  );
};

export default Event;
