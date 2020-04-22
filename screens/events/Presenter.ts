import Event from '../../services/events/Event';

class Presenter {
  constructor(private event: Event) {}

  get name(): string {
    return this.event.name;
  }

  get description(): string {
    return this.event.description;
  }

  get starts_at(): string {
    return this.event.starts_at.toDateString();
  }

  get attendees_count(): string {
    return this.event.attendees_count + ' attendees';
  }
}

export default Presenter;
