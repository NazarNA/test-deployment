import { all } from 'redux-saga/effects';

import hotelSaga from './hotels';

export default function* () {
  yield all([hotelSaga()]);
}
