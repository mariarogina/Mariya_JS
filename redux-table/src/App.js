import "./App.css";
import { connect } from "react-redux";
import {
  tableDataSelector,
  tableSortSelector,
  sortDirectionSelector,
  checkedLinesSelector,
  searchStringSelector,
  filteredTableSelector,
  isLoaderSelector,
  errorSelector,
  handleFetchTableList,
  handleAddNewLine,
  handleSortTable,
  handleDirectionSort,
  handleRemoveLine,
  handleEditTable,
  handleFilterTable,
  handleTableFiltered,
  handleCheckTableRow,
  handleTableLoading,
  handleTableError,
} from "./ducks/table";
import { useEffect, useCallback } from "react";
import ShortCountriesForm from "./ShortCountriesForm";

function App({
  handleFetchTableList,
  tableData,
  handleTableError,
  isLoader,
  handleSortTable,
  handleDirectionSort,
  isUpDirection,
  searchString,
  handleFilterTable,
  handleTableFiltered,
  newTable,
}) {
  console.log("DATA BEGINS");
  console.log(tableData);
  console.log("DATA ENDS");

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
        console.log("NO data WAS fetched");
      });
  }, [handleFetchTableList, handleTableError]);


  const handleSortByField = useCallback(
    (field) => {
      const sortedTable = tableData.sort((a, b) => {
        if (a[field] > b[field]) {
          return isUpDirection ? 1 : -1;
        } else if (a[field] < b[field]) {
          return isUpDirection ? -1 : 1;
        } else {
          return 0;
        }
      });

      handleSortTable(sortedTable);

      handleDirectionSort(!isUpDirection);
    },
    [tableData, handleSortTable, handleDirectionSort, isUpDirection]
  );

  const handleChange = (event) => {
    handleFilterTable(event.target.value);
    console.log(searchString);
  };

  const handleFilterList = useCallback(() => {
    searchString !== ""
      ? (newTable = tableData.filter((item) =>
          item.name.toLowerCase().includes(searchString.toLowerCase())
        ))
      : (newTable = tableData);

    handleTableFiltered(newTable);
  }, [tableData, searchString, handleTableFiltered]);

  function filterHandler(event) {
    handleChange(event);
    handleFilterList();
  }

  function refreshPage() {
    window.location.reload(false);
  }

  if (isLoader) {
    handleTableLoading();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Filter country"
            style={{ marginBottom: "20px" }}
            value={searchString}
            onChange={(e) => {
              filterHandler(e);
            }}
          />

          <button
            className="btn btn-primary-outline"
            style={{ color: "white", borderColor: "white" }}
            onClick={refreshPage}
          >
            {" "}
            Reset filter{" "}
          </button>
        </div>

        <ShortCountriesForm
          handleSubmit={() => {
            console.log("here should go handleAddNewLine");
          }}
        />
        <table className="table" style={{ color: "inherit" }}>
          <thead>
            <tr>
              <th scope="col" align="center">
                No.
              </th>
              <th
                scope="col"
                align="center"
                onClick={() => {
                  handleSortByField("name");
                }}
              >
                Name
              </th>
              <th
                scope="col"
                align="center"
                onClick={() => {
                  handleSortByField("capital");
                }}
              >
                Capital
              </th>
              <th
                scope="col"
                align="center"
                onClick={() => {
                  handleSortByField("language");
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
    isUpDirection: sortDirectionSelector(state),
  }),
  {
    handleFetchTableList,
    handleTableFiltered,
    handleAddNewLine,
    handleSortTable,
    handleDirectionSort,
    handleRemoveLine,
    handleEditTable,
    handleFilterTable,
    handleCheckTableRow,
    handleTableLoading,
    handleTableError,
  }
)(App);
