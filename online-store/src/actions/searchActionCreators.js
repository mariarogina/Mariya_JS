import {
    CHANGE_SEARCH_FIELD,
    IS_SEARCHING
  } from '../actions/actionTypes'

  //Search
export const changeSearchField = searchString => ({
    type: CHANGE_SEARCH_FIELD,
    payload: {
      searchString,
    },
  });
  
  export const setSearching = () => ({
    type: IS_SEARCHING,
  });
  