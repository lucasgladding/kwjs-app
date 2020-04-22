import Event from '../../services/events/Event';

class Presenter {
  constructor(private event: Event) {}

  get name(): string {
    return this.event.name;
  }

  get date(): string {
    return this.event.starts_at.toDateString();
  }

  get description(): string {
    return this.event.description;
  }

  get rsvps(): string {
    return this.event.attendees_count + ' attendees';
  }
}

export default Presenter;
