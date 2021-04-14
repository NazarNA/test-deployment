import { Hotel } from './../../api/hotels/types';
import { getHotels, postHotel } from './../../api/hotels/endpoints';

import { HotelsType } from './types';

export const loadHotels = () => ({
  type: HotelsType.GET_ALL_REQUEST
});

// export const loadHotels = () => async (dispatch: any) => {
//   dispatch({
//     type: HotelsType.GET_ALL_REQUEST
//   })

//   try{
//     const res = await getHotels()

//     dispatch({
//       type: HotelsType.GET_ALL_SUCCESS,
//       payload: res.data
//     })
//   } catch(e) {
//     dispatch({
//       type: HotelsType.GET_ALL_FAIL,
//       payload: e
//     })
//   }

// }

export const createHotel = (hotel: Hotel) => ({
  type: HotelsType.ADD_HOTEL_REQUEST,
  payload: hotel
});

// export const createHotel = (hotel: Hotel) => async (dispatch: any) => {
//   dispatch({
//     type: HotelsType.ADD_HOTEL_REQUEST
//   })

//   try{
//     const res = await postHotel(hotel)

//     dispatch({
//       type: HotelsType.ADD_HOTEL_SUCCESS,
//       payload: {
//         ...hotel,
//         id: res.data.objectId
//       }
//     })
//   } catch(e) {
//     dispatch({
//       type: HotelsType.ADD_HOTEL_FAIL,
//       payload: e
//     })
//   }

// }
