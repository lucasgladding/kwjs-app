import React from 'react';
import {render} from '@testing-library/react-native';

import Event from './Event';

describe('Event', () => {
  const data = {
    name: 'Event',
    description: 'Lorem ipsum...',
    starts_at: 'April 22, 2020 @ 7:00 PM',
    attendees_count: '50 attendees',
  };

  it('renders', () => {
    const {getByText} = render(<Event name={data.name} description={data.description} starts_at={data.starts_at} attendees_count={data.attendees_count} />);

    expect(getByText(data.name)).toBeDefined();
    expect(getByText(sanitize(data.description))).toBeDefined();
    expect(getByText(data.starts_at)).toBeDefined();
    expect(getByText(data.attendees_count)).toBeDefined();
  });
});

const sanitize = (input: string) => {
  return (content: string) => {
    return input.replace(/\n+/g, ' ') == content;
  };
};
