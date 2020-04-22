import React from 'react';
import {render} from '@testing-library/react-native';

import Event from '../../services/events/Event';
import Screen from "./Screen";

const fixture = require('../../fixtures/events.json');

describe('events/Screen', () => {
  it('renders events', () => {
    const events: Event[] = fixture.map(Event.decode);
    const {getByText} = render(<Screen events={events} />);

    expect(getByText(events[0].name)).toBeDefined();
  });
});
