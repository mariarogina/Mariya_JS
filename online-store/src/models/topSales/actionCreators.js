import {
    FETCH_TOPSALES_REQUEST,
    FETCH_TOPSALES_FAILURE,
    FETCH_TOPSALES_SUCCESS
  } from '../actions/actionTypes'

//Top-Sales
export const fetchTopSalesRequest = () => ({
    type: FETCH_TOPSALES_REQUEST,
  });
  
  export const fetchTopSalesFailure = error => ({
    type: FETCH_TOPSALES_FAILURE,
    payload: {
      error,
    },
  });
  
  export const fetchTopSalesSuccess = items => ({
    type: FETCH_TOPSALES_SUCCESS,
    payload: {
      items,
    },
  });
