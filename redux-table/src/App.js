import "./App.css";
import { connect } from "react-redux";
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
  handleFieldName,
  handleNewValue,
  isLoaderSelector,
  searchStringSelector,
  sortSelector,
  tableDataSelector,
  fieldNameSelector,
  newValueSelector,
  
} from "./ducks/table";
import { useEffect, useCallback,} from "react";
import ShortCountriesForm from "./ShortCountriesForm";

function App({
  handleFetchTableList,
  tableData,
  error,
  isLoader,
  sort,
  searchString,
  handleFilterTable,
  handleChangeSort,
  handleAddNewLine,
  handleCheckTableRow,
  handleRemoveLine,
  handleFieldName,
  handleNewValue,
  checkedLines,
  handleEditTable
}) {
  useEffect(() => {
    handleFetchTableList();
  }, [handleFetchTableList]);

  const handleChange = (event) => {
    handleFilterTable(event.target.value);
    console.log(searchString);
  };


  const handleCheck = useCallback(
    (row) => {
      handleCheckTableRow(row);
      if (checkedLines.includes(row.id)){
        checkedLines = checkedLines.filter(function(item) {
          return item !== row.id
        })
      } else {
        checkedLines.push(row.id)};
      console.log(checkedLines)
    },
    [handleCheckTableRow, checkedLines]
  );

  const handleRemove = useCallback(() => {
    handleRemoveLine()
  }, [handleRemoveLine]);

  const handleEdit= (event, line) => {
    handleNewValue(event.target.value);
    handleFieldName(event.target.name)
    handleEditTable(event, line)
  };

  
  function isCheckedLine(row) {
    if (checkedLines.includes(row.id)){
      return true
    } else {
      return false
    }
  }


  if (isLoader) {
    return (
      <div className="App">
        <header className="App-header">Now Loading ....</header>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <header className="App-header">{error}</header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          placeholder="Filter country"
          style={{ marginBottom: "20px" }}
          value={searchString}
          onChange={handleChange}
        />

        <ShortCountriesForm
          handleSubmit={handleAddNewLine}
          initialData={{
            id: "",
            name: "",
            capital: "",
            language: "",
            currency: "",
          }}
        />

        <button
          type="button"
          className="btn btn-primary"
          style={{ padding: "10px", minWidth: "100px" }}
          onClick={handleRemove}
        >
          Remove selected countries
        </button>

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
                  handleChangeSort({
                    field: "name",
                    isUpDirection: !sort.isUpDirection,
                  });
                }}
              >
                Name
              </th>
              <th
                scope="col"
                align="center"
                onClick={() => {
                  handleChangeSort({
                    field: "capital",
                    isUpDirection: !sort.isUpDirection,
                  });
                }}
              >
                Capital
              </th>
              <th
                scope="col"
                align="center"
                onClick={() => {
                  handleChangeSort({
                    field: "language",
                    isUpDirection: !sort.isUpDirection,
                  });
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
            {tableData.map((row, index) => {
              return (
                <tr key={row.name}>
                  <th scope="row">{row.id}</th>
                  <td align="center">
                          {isCheckedLine(row) ? (
                            <input
                              type="text"
                              name={"name"}
                              defaultValue={row.name}
                              onChange={(event) =>
                                handleEdit(event,index)
                              }
                            />
                          ) : (
                            row.name
                          )}</td>
                  <td align="center">{row.capital}</td>
                  <td align="center">{row.language}</td>
                  <td align="center">{row.currency}</td>
                  <td align="center">
                    <input type="checkbox" onClick={() => handleCheck(row)} />
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
    checkedLines: checkedLinesSelector(state),
    searchString: searchStringSelector(state),
    isLoader: isLoaderSelector(state),
    error: errorSelector(state),
    sort: sortSelector(state),
    fieldName: fieldNameSelector(state),
    newValue: newValueSelector(state),
  }),
  {
    handleFetchTableList,
    handleAddNewLine,
    handleChangeSort,
    handleRemoveLine,
    handleFilterTable,
    handleEditTable,
    handleCheckTableRow,
    handleTableLoading,
    handleTableError,
    handleNewValue,
    handleFieldName
  }
)(App);
