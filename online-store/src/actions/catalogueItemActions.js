import {
    FETCH_ITEM_REQUEST,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
    SET_AVALIBLE_SIZES,
    SET_QUANTITY,
    SET_SIZE
  } from '../actions/actionTypes'

  import urls from "../constants"
  

//catalogue item
export const fetchItemRequest = () => ({
    type: FETCH_ITEM_REQUEST,
  });
  
  export const fetchItemFailure = error => ({
    type: FETCH_ITEM_FAILURE,
    payload: {
      error,
    },
  });
  
  export const fetchItemSuccess = item => ({
    type: FETCH_ITEM_SUCCESS,
    payload: {
      item,
    },
  });
  
  export const setAvalibleSizes = sizes => ({
    type: SET_AVALIBLE_SIZES,
    payload: {
      sizes,
    },
  });
  
  export const setQuantity = quantity => ({
    type: SET_QUANTITY,
    payload: {
      quantity,
    },
  });
  
  export const setSize = size => ({
    type: SET_SIZE,
    payload: {
      size,
    },
  });
  
  export const fetchItem = (id) => async (dispatch) => {
    dispatch(fetchItemRequest());
    
    try {
      const response = await fetch(`${urls.items}/${id}`, {
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      const filteredSizes = data.sizes.filter(item => item.avalible);
      dispatch(setAvalibleSizes(filteredSizes));
      dispatch(fetchItemSuccess(data));
    } catch (error) {
      dispatch(fetchItemFailure(error.message));
    }
  };
  