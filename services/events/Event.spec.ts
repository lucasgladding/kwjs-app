import Event from './Event';

const fixture = require('../../fixtures/events.json');

describe('events/Event', () => {
  it('decodes', () => {
    const data = fixture[0];
    const event = Event.decode(data);

    expect(event.name).toEqual(data.name);
    expect(event.description).toEqual(data.description);
    expect(event.starts_at).toEqual(new Date(data.starts_at));
    expect(event.ends_at).toEqual(new Date(data.ends_at));
    expect(event.duration).toEqual(data.duration);
    expect(event.attendees_count).toEqual(data.attendees_count);
  });
});
