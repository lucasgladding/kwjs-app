import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";

import Presenter from './Presenter';

import Event from '../../components/Event';
import Separator from "../../components/Separator";
import Title from "../../components/Title";

interface ScreenProps {
  events: Presenter[];
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  list: {
    flex: 1,
  },
});

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEvent: ListRenderItem<Presenter> = ({item}) => {
    return <Event name={item.name} date={item.date} rsvps={item.rsvps} />;
  };

  return (
    <View style={styles.container}>
      <Title text="KWJavaScript" />
      <FlatList
        data={props.events}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item: Presenter, index: number) => `event-${index}`}
        renderItem={renderEvent}
        style={styles.list}
      />
    </View>
  );
};

export default Screen;
