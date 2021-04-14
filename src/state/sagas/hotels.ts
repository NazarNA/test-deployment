import { postHotel } from './../../api/hotels/endpoints';
import { call, put, takeLatest } from '@redux-saga/core/effects';
import { all } from 'redux-saga/effects';
import { getHotels } from '../../api/hotels';
import { HotelsType } from '../actions/types';

import * as actions from '../actions/hotels';

function* loadHotels(): Generator {
  try {
    // @ts-ignore
    const response: any = yield call(getHotels);
    console.log(response);
    put({
      type: HotelsType.ADD_HOTEL_SUCCESS,
      payload: response.data
    });
  } catch (err) {}
}

function* watchLoadHotels() {
  yield takeLatest(HotelsType.GET_ALL_REQUEST, loadHotels);
}

function* addHotels({ payload }: any): Generator {
  try {
    // @ts-ignore
    const response: any = yield call(postHotel, payload);
    console.log(response);
    put({
      type: HotelsType.ADD_HOTEL_SUCCESS,
      payload: {
        ...payload,
        id: response.data.objectId
      }
    });
  } catch (err) {}
}

function* watchAddHotels() {
  yield takeLatest(HotelsType.ADD_HOTEL_REQUEST, addHotels);
}

export default function* () {
  yield all([watchLoadHotels(), watchAddHotels()]);
}
