import {createSelector} from "reselect"

/**
 * Constants
 * */

export const moduleName = "table"

export const FETCH_TABLE_DATA = `${moduleName}/FETCH_TABLE_DATA`
export const ADD_TABLE_ROW = `${moduleName}/ADD_TABLE_ROW`
export const TABLE_SORT = `${moduleName}/TABLE_SORT`
export const SET_SORT = `${moduleName}/SET_SORT`
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
  searchString: "",
  isLoader: false,
  error: null,
  sort: {
    isUpDirection: true,
    field: ''
  }
}

export default function reducer(state = ReducerRecord, action) {
  const {type, payload} = action

  switch (type) {
    case FETCH_TABLE_DATA:
    case ADD_TABLE_ROW:
    case REMOVE_TABLE_DATA:
    case TABLE_EDIT:
      return Object.assign({}, state, {
        tableData: payload,
      })
    case SET_SORT:
      return Object.assign({}, state, {
        sort: payload,
      })
    case TABLE_FILTER:
      return Object.assign({}, state, {
        searchString: payload,
      })
    case CHECK_TABLE_ROW:
      return Object.assign({}, state, {
        checkedLines: payload,
      })
    case TABLE_LOAD:
      return Object.assign({}, state, {
        isLoader: payload,
      })
    case TABLE_ERROR:
      return Object.assign({}, state, {
        error: payload,
      })
    default:
      return state
  }
}

/**
 * Selectors
 * */

export const stateSelector = (state) => state[moduleName]
export const tableDataSelector = createSelector(
  stateSelector,
  (state) => {
    if (state.searchString) {
      return state.tableData.filter((item) => item.name.toLowerCase().includes(state.searchString.toLowerCase()))
    }

    if (state.sort.field) {
      return state.tableData.sort((a, b) => {
        if (a[state.sort.field] > b[state.sort.field]) {
          return state.sort.isUpDirection ? 1 : -1
        } else if (a[state.sort.field] < b[state.sort.field]) {
          return state.sort.isUpDirection ? -1 : 1
        } else {
          return 0
        }
      })
    }
    return state.tableData
  }
)

export const sortSelector = createSelector(
  stateSelector,
  (state) => state.sort
)
export const checkedLinesSelector = createSelector(
  stateSelector,
  (state) => state.checkedLines
)
export const searchStringSelector = createSelector(
  stateSelector,
  (state) => state.searchString
)

export const isLoaderSelector = createSelector(
  stateSelector,
  (state) => state.isLoader
)
export const errorSelector = createSelector(
  stateSelector,
  (state) => state.error
)

/**
 * Action creators
 * */

// export const handleFetchTableList = (tableData) => ({
//   type: FETCH_TABLE_DATA,
//   payload: tableData,
// });

export const handleFetchTableList = () => async (dispatch, getState) => {

  await dispatch({
    type: TABLE_LOAD,
    payload: true,
  })

  try {
    let response = await fetch("https://gist.githubusercontent.com/mariarogina/1bf4e1947ec2fc1e8ded4882e57f4d69/raw/89eb2570fcfd69f31c4dfd21f5f49733fe0bb4d0/countriesdata.json")
    const data = await response.json()

    await dispatch({
      type: FETCH_TABLE_DATA,
      payload: data,
    })
  } catch (error){
    await dispatch({
      type: TABLE_ERROR,
      payload: error,
    })
  } finally {
    dispatch({
      type: TABLE_LOAD,
      payload: false,
    })
  }
}

export const handleAddNewLine = (newTable) => ({
  type: ADD_TABLE_ROW,
  payload: newTable,
})

export const handleChangeSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
})

export const handleRemoveLine = (newTable) => ({
  type: REMOVE_TABLE_DATA,
  payload: newTable,
})

export const handleEditTable = (newTable) => ({
  type: TABLE_EDIT,
  payload: newTable,
})

export const handleFilterTable = (searchString) => ({
  type: TABLE_FILTER,
  payload: searchString,
})


export const handleCheckTableRow = (checkedLines) => ({
  type: CHECK_TABLE_ROW,
  payload: checkedLines,
})

export const handleTableLoading = (isLoader) => ({
  type: TABLE_LOAD,
  payload: isLoader,
})

export const handleTableError = (error) => ({
  type: TABLE_ERROR,
  payload: error,
})
