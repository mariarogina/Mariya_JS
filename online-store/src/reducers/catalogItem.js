import {
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  SET_AVALIBLE_SIZES,
  SET_QUANTITY,
  SET_SIZE,
} from "../actions/actionTypes"
import {fetchItemFailure, fetchItemSuccess} from '../actions/actionCreators'

import urls from '../constants'
import {put, take} from 'redux-saga/effects'

const initialState = {
  item: null,
  avalibleSizes: [],
  loading: false,
  error: null,
  quantity: 1,
  size: null,
}

export default function catalogItemReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return {
        ...initialState,
        loading: true,
      }
    case FETCH_ITEM_FAILURE:
      const {error} = action.payload
      return {
        ...state,
        loading: false,
        error,
      }
    case FETCH_ITEM_SUCCESS:
      const {item} = action.payload
      return {
        ...state,
        item,
        loading: false,
        error: null,
      }
    case SET_AVALIBLE_SIZES:
      const sizes = action.payload
      return {
        ...state,
        avalibleSizes: sizes,
        loading: false,
        error: null,
      }
    case SET_QUANTITY:
      const {quantity} = action.payload
      return {
        ...state,
        quantity,
      }
    case SET_SIZE:
      const {size} = action.payload
      return {
        ...state,
        size,
      }
    default:
      return state
  }
}

export const fetchItemSaga = function* () {
  while (true) {
    const {payload} = yield take(FETCH_ITEM_REQUEST)
    try {
      const response = yield fetch(`${urls.items}/${payload}`, {
        mode: "cors",
      })

      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = yield response.json()
      const filteredSizes = data.sizes.filter((item) => item.avalible)

      yield put({
        type: SET_AVALIBLE_SIZES,
        payload: filteredSizes,
      })

      yield put(fetchItemSuccess(data))
      
        // if (localStorage[`cartItem${id}_${size}`]) {
        //   const updatedItem = JSON.parse(localStorage[`cartItem${id}_${size}`]);
        //   updatedItem.quantity += 1;
        //   localStorage[`cartItem${id}_${size}`] = JSON.stringify(updatedItem);
        // } else {
        //   localStorage[`cartItem${id}_${size}`] = JSON.stringify({
        //     name: `cartItem${id}_${size}`,
        //     id: Number(id),
        //     link: match.url,
        //     title: item.title,
        //     price: item.price,
        //     quantity: quantity,
        //     size: size,
        //   });
        // }
    
      //   history.push("/cart");
      // ;
    

    } catch (error) {
      yield put(fetchItemFailure(error))
    }
  }
}