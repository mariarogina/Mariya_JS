import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_SUCCESS,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_MORE_REQUEST,
    FETCH_MORE_FAILURE,
    FETCH_MORE_SUCCESS,
  } from "../actions/actionTypes";
  
  import urls from "../constants"

  
//catalogue
export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST,
  });
  
  export const fetchItemsFailure = errorItems => ({
    type: FETCH_ITEMS_FAILURE,
    payload: {
      errorItems,
    },
  });
  
  export const fetchItemsSuccess = newItems => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: {
      newItems,
    },
  });
  
  export const fetchItems = search => async (dispatch) => {
    dispatch(fetchItemsRequest());
  
    try {
      const response = await fetch(`${urls.items}?${search}`, {
        mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
  
  //catalogue Categories
  export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
  });
  
  export const fetchCategoriesFailure = errorCategories => ({
    type: FETCH_CATEGORIES_FAILURE,
    payload: {
      errorCategories,
    },
  });
  
  export const fetchCategoriesSuccess = categories => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
      categories,
    },
  });
  
  //catalogue more items
  export const fetchMoreRequest = () => ({
    type: FETCH_MORE_REQUEST,
  });
  
  export const fetchMoreFailure = () => ({
    type: FETCH_MORE_FAILURE
  });
  
  export const fetchMoreSuccess = moreItems => ({
    type: FETCH_MORE_SUCCESS,
    payload: {
      moreItems,
    },
  });
  
  export const fetchMore = search => async (dispatch) => {
    dispatch(fetchMoreRequest());
  
    try {
      const response = await fetch(`${urls.items}?${search}`, {
  
      mode: 'cors',
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      
      const data = await response.json();
      dispatch(fetchMoreSuccess(data));
    } catch (error) {
      dispatch(fetchMoreFailure());
      console.log(error.message)
    }
  };