import {createSelector} from 'reselect'


/**
 * Constants
 * */

export const moduleName = 'table'

export const FETCH_TABLE_DATA = `${moduleName}/FETCH_TABLE_DATA`
export const ADD_TABLE_ROW = `${moduleName}/ADD_TABLE_ROW`
export const TABLE_SORT = `${moduleName}/TABLE_SORT`
export const TABLE_FILTER = `${moduleName}/TABLE_FILTER`
export const TABLE_EDIT = `${moduleName}/TABLE_EDIT`
export const REMOVE_TABLE_DATA = `${moduleName}/REMOVE_TABLE_DATA`
export const CHECK_TABLE_ROW = `${moduleName}/CHECK_TABLE_ROW`
export const TABLE_LOAD = `${moduleName}/TABLE_LOAD`
export const TABLE_ERROR = `${moduleName}/TABLE_ERROR`


/**
 * Reducer
 * */

export const ReducerRecord = {
  tableData: [],
  checkedLines: [],
  searchString: '',
  isLoader: false,
  error: null
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type){
    case FETCH_TABLE_DATA:
    case ADD_TABLE_ROW:
    case REMOVE_TABLE_DATA:
    case TABLE_EDIT:
    case TABLE_SORT:
      return Object.assign({}, state, {
        tableData: payload
      })
    case TABLE_FILTER:
      return Object.assign({}, state, {
        searchString: payload
      })
    case CHECK_TABLE_ROW:
      return Object.assign({}, state, {
        checkedLines: payload
      })
    case TABLE_LOAD:
      return Object.assign({}, state, {
        isLoader: payload
      })
    case TABLE_ERROR:
      return Object.assign({}, state, {
        error: payload
      })
    default:
      return state
  }
}


/**
 * Selectors
 * */


export const stateSelector = state => state[moduleName]
export const tableDataSelector = createSelector(stateSelector, state => state.tableData)
export const checkedLinesSelector = createSelector(stateSelector, state => state.checkedLines)
export const searchStringSelector = createSelector(stateSelector, state => state.searchString)
export const isLoaderSelector = createSelector(stateSelector, state => state.isLoader)
export const errorSelector = createSelector(stateSelector, state => state.error)


/**
 * Action creators
 * */

export const handleFetchTableList = (tableList) => ({
  type: FETCH_TABLE_DATA,
  payload: tableList
})

export const handleAddNewLine = (newTable) => ({
  type: ADD_TABLE_ROW,
  payload: newTable
})

export const handleSortTable = (newTable) => ({
  type: TABLE_SORT,
  payload: newTable
})
