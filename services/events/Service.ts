const services = require('../../config/services.json');

import Event from './Event';

class Service {
  private static endpoint(url: string): string {
    return `${services.host}/${url}`
  }

  async list(): Promise<Event[]> {
    const response = await fetch(Service.endpoint('events'));
    const data = await response.json();
    return data.map(Event.decode);
  }
}

export default Service;
