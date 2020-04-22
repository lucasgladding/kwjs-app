import Service from './Service';

import {mockFetch} from '../../test-helpers/fetch';

const fixture = require('../../fixtures/events.json');

describe('events/Service', () => {
  it('gets the events', async () => {
    mockFetch(fixture);

    const service = new Service();
    const events = await service.list();
    expect(events).toEqual(fixture);
  });
});
