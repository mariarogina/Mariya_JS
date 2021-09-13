import {
    
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    
  } from "../actions/actionTypes";
  import {put, take} from "redux-saga/effects"
  import urls from "../constants"
  
  export const fetchCategoriesSaga = function* () {
    while(true) {
      yield take(FETCH_CATEGORIES_REQUEST)
      try {
        const response = yield fetch(urls.categories, {
          mode: 'cors',
        });
  
        if (!response.ok) {
          throw new Error(response.statusText);
        }
  
        const data = yield response.json();
  
        yield put({
          type: FETCH_CATEGORIES_SUCCESS,
          payload: data
        })
  
      } catch (error) {
        yield put({
          type: FETCH_CATEGORIES_FAILURE,
          payload: error.message
        })
      }
    }
  }