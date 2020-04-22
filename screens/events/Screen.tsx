import React from 'react';
import {FlatList, ListRenderItem, View} from "react-native";

import Event from '../../services/events/Event';
import Presenter from './Presenter';

import EventComponent from '../../components/Event';

interface ScreenProps {
  events: Event[];
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const renderEventComponent: ListRenderItem<Event> = ({item, index}) => {
    const presenter = new Presenter(item);
    return <EventComponent name={presenter.name} description={presenter.description} starts_at={presenter.starts_at} attendees_count={presenter.attendees_count} />;
  };

  return (
    <View>
      <FlatList data={props.events} keyExtractor={(item: Event, index: number) => `event-${index}`} renderItem={renderEventComponent} />
    </View>
  );
};

export default Screen;
