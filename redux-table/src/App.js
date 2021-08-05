import "./App.css"
import {connect} from "react-redux"
import {
  checkedLinesSelector,
  errorSelector,
  handleAddNewLine,
  handleChangeSort,
  handleCheckTableRow,
  handleEditTable,
  handleFetchTableList,
  handleFilterTable,
  handleRemoveLine,
  handleTableError,
  handleTableLoading,
  isLoaderSelector,
  searchStringSelector,
  sortSelector,
  tableDataSelector,
} from "./ducks/table"
import {useEffect} from "react"
import ShortCountriesForm from "./ShortCountriesForm"

function App({
               handleFetchTableList,
               tableData,
               error,
               isLoader,
               sort,
               searchString,
               handleFilterTable,
               handleChangeSort
             }) {
  console.log("DATA BEGINS")
  console.log(tableData)
  console.log("DATA ENDS")

  useEffect(() => {
    handleFetchTableList()
  }, [handleFetchTableList])

  const handleChange = (event) => {
    handleFilterTable(event.target.value)
    console.log(searchString)
  }

  if (isLoader) {
    return <div className="App">
      <header className="App-header">
        Now Loading ....
      </header>
    </div>
  }

  if (error) {
    return <div className="App">
      <header className="App-header">
        {error}
      </header>
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Filter country"
          style={{marginBottom: "20px"}}
          value={searchString}
          onChange={handleChange}
        />

        <ShortCountriesForm
          handleSubmit={() => {
            console.log("here should go handleAddNewLine")
          }}
          initialData={{name: '', capital: '', language: '', currency: ''}}
        />
        <table className="table" style={{color: "inherit"}}>
          <thead>
          <tr>
            <th scope="col" align="center">
              No.
            </th>
            <th
              scope="col"
              align="center"
              onClick={() => {
                handleChangeSort({field: "name", isUpDirection: !sort.isUpDirection})
              }}
            >
              Name
            </th>
            <th
              scope="col"
              align="center"
              onClick={() => {
                handleChangeSort({field: "capital", isUpDirection: !sort.isUpDirection})
              }}
            >
              Capital
            </th>
            <th
              scope="col"
              align="center"
              onClick={() => {
                handleChangeSort({field: "language", isUpDirection: !sort.isUpDirection})
              }}
            >
              Language
            </th>
            <th scope="col" align="center">
              Currency
            </th>
            <th scope="col" align="center"></th>
          </tr>
          </thead>

          <tbody>
          {tableData.map((row) => {
            return (
              <tr key={row.name}>
                <th scope="row">{row.id}</th>
                <td align="center">{row.name}</td>
                <td align="center">{row.capital}</td>
                <td align="center">{row.language}</td>
                <td align="center">{row.currency}</td>
                <td align="center">
                  <input type="checkbox"/>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </header>
    </div>
  )
}

export default connect(
  (state) => ({
    tableData: tableDataSelector(state),
    checkedLines: checkedLinesSelector(state),
    searchString: searchStringSelector(state),
    isLoader: isLoaderSelector(state),
    error: errorSelector(state),
    sort: sortSelector(state),
  }),
  {
    handleFetchTableList,
    handleAddNewLine,
    handleChangeSort,
    handleRemoveLine,
    handleEditTable,
    handleFilterTable,
    handleCheckTableRow,
    handleTableLoading,
    handleTableError,
  }
)(App)
