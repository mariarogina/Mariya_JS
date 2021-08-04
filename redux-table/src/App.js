import "./App.css";
import { connect } from "react-redux";
import {
  tableDataSelector,
  tableSortSelector,
  checkedLinesSelector,
  searchStringSelector,
  isLoaderSelector,
  errorSelector,
  handleFetchTableList,
  handleAddNewLine,
  handleSortTable,
  handleRemoveLine,
  handleEditTable,
  handleFilterTable,
  handleCheckTableRow,
  handleTableLoading,
  handleTableError,
} from "./ducks/table";
import { useEffect } from "react";
import ShortCountriesForm from "./ShortCountriesForm";



function App({ handleFetchTableList, tableData, handleTableError, isLoader }) {
  console.log("DATA BEGINS");
  console.log(tableData);
  console.log("DATA ENDS");

  const initialForm = {
    id: "",
    name: "",
    capital: "",
    language: "",
    currency: "",
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/mariarogina/1bf4e1947ec2fc1e8ded4882e57f4d69/raw/89eb2570fcfd69f31c4dfd21f5f49733fe0bb4d0/countriesdata.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        handleFetchTableList(data);
      })
      .catch((error) => {
        handleTableError(error);
      });
  }, [handleFetchTableList, handleTableError]);

  console.log("SELECTOR" + handleSortTable);

  if (isLoader) {
    handleTableLoading();
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Filter country"
        // value={searchTerm}
        // onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Filter city"
        // value={searchTermCity}
        // onChange={handleChangeCity}
      />
      <header className="App-header">

      <ShortCountriesForm
                  handleSubmit={handleAddCountry}
                  initialData={initialForm}
                />
        <table className="table" style={{ color: "inherit" }}>
          <thead>
            <tr>
              <th scope="col" align="center">
                No.
              </th>
              <th scope="col" align="center">
                Name
              </th>
              <th scope="col" align="center" onClick={handleSortTable}>
                Capital
              </th>
              <th scope="col" align="center">
                Language
              </th>
              <th scope="col" align="center">
                Currency
              </th>
              <th scope="col" align="center"></th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, index) => {
              return (
                <tr key={row.name}>
                  <th scope="row">{row.id}</th>
                  <td align="center">{row.name}</td>
                  <td align="center">{row.capital}</td>
                  <td align="center">{row.language}</td>
                  <td align="center">{row.currency}</td>
                  <td align="center">
                    <input type="checkbox" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default connect(
  (state) => ({
    tableData: tableDataSelector(state),
    sortData: tableSortSelector(state),
    checkedLines: checkedLinesSelector(state),
    searchString: searchStringSelector(state),
    isLoader: isLoaderSelector(state),
    error: errorSelector(state),
  }),
  {
    handleFetchTableList,
    handleAddNewLine,
    handleSortTable,
    handleRemoveLine,
    handleEditTable,
    handleFilterTable,
    handleCheckTableRow,
    handleTableLoading,
    handleTableError,
  }
)(App);
