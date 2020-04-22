import Event from '../../services/events/Event';
import Presenter from "./Presenter";

describe('events/Presenter', () => {
  it('transforms values', () => {
    const event = new Event({
      name: 'Event',
      description: 'Description',
      starts_at: new Date(),
      ends_at: new Date(),
      duration: 3600,
      attendees_count: 50,
    });
    const presenter = new Presenter(event);

    expect(presenter.name).toEqual(event.name);
    expect(presenter.description).toEqual(event.description);
    expect(presenter.starts_at).toEqual(event.starts_at.toDateString());
    expect(presenter.attendees_count).toEqual(`${event.attendees_count} attendees`);
  });
});
