import * as fromGuests from './guests.actions';

describe('loadGuests', () => {
  it('should return an action', () => {
    expect(fromGuests.loadGuests()).toBe('[Guests] Load Guests');
  });
});
