import * as actions from '../hotels';
import { HotelsType } from '../types';

describe('Hotels Action', () => {
  it('should create action for all hotels', () => {
    const expectedResult = {
      type: HotelsType.GET_ALL_REQUEST
    };

    expect(actions.loadHotels()).toEqual(expectedResult);
  });
});
