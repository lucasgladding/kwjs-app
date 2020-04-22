export function mockFetch(data: any) {
  const response = {
    json: () => data,
    text: () => data,
  };
  global.fetch = jest.fn(() => Promise.resolve(response));
  return global.fetch;
}
