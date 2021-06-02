import './App.css';
import DropDownList from './Components/DropDownList'

const countriesList = [
  {name: "Russia", capital: "Moscow", currency: "RUB", language : "russian"},
  {name: "Finland", capital: "Helsinki", currency: "EUR", language : "Finnish"},
  {name: "Great Britain", capital: "London", currency: "GBP", language : "English"}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DropDownList list={countriesList}/>
      </header>
    </div>
  );
}

export default App;
