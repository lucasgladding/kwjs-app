import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export interface TitleProps {
  text: string;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 40,
  },
});

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default Title;
