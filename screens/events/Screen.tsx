import React from 'react';
import {FlatList, ListRenderItem, View} from "react-native";

import Presenter from './Presenter';

import EventComponent from '../../components/Event';

interface ScreenProps {
  events: Presenter[];
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEventComponent: ListRenderItem<Presenter> = ({item, index}) => {
    return <EventComponent name={item.name} date={item.date} description={item.description} rsvps={item.rsvps} />;
  };

  return (
    <View>
      <FlatList data={props.events} keyExtractor={(item: Presenter, index: number) => `event-${index}`} renderItem={renderEventComponent} />
    </View>
  );
};

export default Screen;
