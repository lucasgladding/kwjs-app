import Event from './Event';

class Service {
  private static endpoint(url: string): string {
    const base_url = 'https://localhost:3000';
    return `${base_url}/${url}`
  }

  async list() {
    const response = await fetch(Service.endpoint('events'));
    const data = await response.json();
    return data.map(Event.decode);
  }
}

export default Service;
