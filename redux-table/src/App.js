import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {
  tableDataSelector,
  checkedLinesSelector,
  searchStringSelector,
  isLoaderSelector,
  errorSelector,
  handleFetchTableList,
  handleAddNewLine,
  handleSortTable
} from './ducks/table'
import {useEffect} from "react"

function App({handleFetchTableList, tableData}) {

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/mariarogina/1bf4e1947ec2fc1e8ded4882e57f4d69/raw/89eb2570fcfd69f31c4dfd21f5f49733fe0bb4d0/countriesdata.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        handleFetchTableList(data)
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {tableData.map(item => <div>{item.name}</div>)}
      </header>
    </div>
  );
}

export default connect(state => ({
  tableData: tableDataSelector(state),
  checkedLines: checkedLinesSelector(state),
  searchString: searchStringSelector(state),
  isLoader: isLoaderSelector(state),
  error: errorSelector(state)
}), {
  handleFetchTableList,
  handleAddNewLine,
  handleSortTable
}
  )(App);
