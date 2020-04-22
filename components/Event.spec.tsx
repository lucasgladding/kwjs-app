import React from 'react';
import {render} from '@testing-library/react-native';

import Event from './Event';

describe('Event', () => {
  const data = {
    name: 'Event',
    date: 'April 22, 2020 @ 7:00 PM',
    description: 'Lorem ipsum...',
    rsvps: '50 attendees',
  };

  it('renders', () => {
    const {getByText} = render(<Event name={data.name} date={data.date} description={data.description} rsvps={data.attendees} />);

    expect(getByText(data.name)).toBeDefined();
    expect(getByText(data.date)).toBeDefined();
    expect(getByText(sanitize(data.description))).toBeDefined();
    expect(getByText(data.rsvps)).toBeDefined();
  });
});

const sanitize = (input: string) => {
  return (content: string) => {
    return input.replace(/\n+/g, ' ') == content;
  };
};
