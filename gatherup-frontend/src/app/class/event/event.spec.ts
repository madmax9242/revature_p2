import { Event } from './event';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event("test@test.com", 1, "EventName", "EventDescription", "EventLocation", "DateTime", "EventType")).toBeTruthy();
  });
});
