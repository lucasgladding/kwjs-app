import React, {useEffect, useState} from 'react';

import Service from '../../services/events/Service';

import Presenter from './Presenter';
import Screen from './Screen';

const Container: React.FC = () => {
  const service = new Service();

  const [events, setEvents] = useState<Presenter[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const events = (await service.list()).map(event => new Presenter(event));
        setEvents(events);
      } catch (error) {
        console.log('Error loading events.', error);
      }
    };
    load();
  }, []);

  return <Screen events={events} />
};

export default Container;
