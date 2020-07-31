import { guestsReducer, initialState } from './guests.reducer';

describe('Guests Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = guestsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
