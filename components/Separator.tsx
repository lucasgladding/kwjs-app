import React from 'react';
import {StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 0.5,
  },
});

const Separator: React.FC = () => {
  return (
    <View style={styles.separator} />
  );
};

export default Separator;

