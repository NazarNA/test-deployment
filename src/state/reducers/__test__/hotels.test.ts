import * as actions from '../../actions/hotels';
import reducer from '../hotelsReducer';
import { Hotel } from '../../../api/hotels';

const initialState = {
  loading: false,
  items: [],
  itemsCount: 0,
  total: 0,
  maxPage: null
};

describe('Hotel Reducer Test', () => {
  it('should return initialState by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should be loading true when creating new hotel', () => {
    const actionToAddHotelData = actions.createHotel({
      name: 'New Hotel Name',
      description: 'bla bla bla',
      phone: '380986638830'
    } as Hotel);

    expect(reducer(initialState, actionToAddHotelData).loading).toBe(true);
  });
});
