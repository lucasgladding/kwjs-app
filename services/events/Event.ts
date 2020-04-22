import Response from './Response';

interface Data {
  name: string;
  description: string;
  starts_at: Date;
  ends_at: Date;
  duration: number;
  attendees_count: number;
}

class Event {
  name: string;
  description: string;
  starts_at: Date;
  ends_at: Date;
  duration: number;
  attendees_count: number;

  constructor(data: Data) {
    this.name = data.name;
    this.description = data.description;
    this.starts_at = data.starts_at;
    this.ends_at = data.ends_at;
    this.duration = data.duration;
    this.attendees_count = data.attendees_count;
  }

  static decode(data: Response): Event {
    return new Event({
      name: data.name,
      description: data.description,
      starts_at: new Date(data.starts_at),
      ends_at: new Date(data.ends_at),
      duration: data.duration,
      attendees_count: data.attendees_count,
    });
  }
}

export default Event;
